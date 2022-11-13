import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/modules/user/user.service";
import { LoginResponseDTO } from "./dto/login-response.dto";
import { MappedUser } from "./dto/user.type";

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<MappedUser> {
    const userData = await this.userService.getUser(email);

    if (userData && userData.password === password) {
      return {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        type: userData.type,
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
}
