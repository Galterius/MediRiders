import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserInput } from "src/modules/user/dto/user.input";
import { UserService } from "src/modules/user/user.service";
import { LoginResponseDTO } from "./dto/login-response.dto";
import { MappedUser } from "./dto/user.type";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<MappedUser> {
    const userData = await this.userService.getUser(email);
    const isValid = await bcrypt.compare(password, userData?.password);
    if (userData && isValid) {
      return {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        role: userData.role,
      };
    }

    return null;
  }

  async login(user: MappedUser): Promise<LoginResponseDTO> {
    return {
      access_token: this.jwtService.sign({ email: user.email, sub: user.id }),
      user: user,
    };
  }

  async signup(registrationData: UserInput): Promise<LoginResponseDTO> {
    const user = await this.userService.getUser(registrationData.email);
    if (user) {
      return {
        access_token: this.jwtService.sign({ email: user.email, sub: user.id }),
        user: {
          id: user.id,
          name: user.name,
          role: user.role,
          email: user.email,
        },
      };
    }

    const hashedPassword = await bcrypt.hash(registrationData.password, 10);
    registrationData.password = hashedPassword;

    const createdUser = await this.userService.create(registrationData);
    return {
      access_token: this.jwtService.sign({ email: createdUser.email, sub: createdUser.id }),
      user: {
        id: createdUser.id,
        name: createdUser.name,
        role: createdUser.role,
        email: createdUser.email,
      },
    };
  }
}
