import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserInput } from "src/modules/user/dto/user.input";
import { UserService } from "src/modules/user/user.service";
import { LoginResponseDTO } from "./dto/login-response.dto";
import * as bcrypt from "bcrypt";
import { LoginInput } from "./dto/login.input";

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}
  async login(user: LoginInput): Promise<LoginResponseDTO> {
    const userData = await this.userService.getUser(user.email);
    const isValid = await bcrypt.compare(user.password, userData.password);

    if (!isValid) {
      throw new UnauthorizedException("Incorrect credentials!");
    }

    return {
      access_token: this.jwtService.sign({ userId: userData.id }),
    };
  }

  async signup(registrationData: UserInput): Promise<LoginResponseDTO> {
    const user = await this.userService.getUser(registrationData.email);

    if (user) {
      throw new ConflictException("User with this credentials already exists!");
    }

    const hashedPassword = await bcrypt.hash(registrationData.password, 12);
    registrationData.password = hashedPassword;

    const createdUser = await this.userService.create(registrationData);
    return {
      access_token: this.jwtService.sign({ userId: createdUser.id }),
    };
  }
}
