import { Injectable } from "@nestjs/common";
import { UserDTO } from "src/modules/user/dto/user.dto";
import { UserService } from "src/modules/user/user.service";
import { LoginResponseDTO } from "./dto/login-response.dto";
import { LoginInput } from "./dto/login.input";
import { MappedUser } from "./dto/user.type";

@Injectable()
export class AuthService {
  constructor(private riderService: UserService) {}

  async validateUser(email: string, password: string): Promise<MappedUser> {
    const userData = await this.riderService.getUser(email);

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

  async login(loginData: LoginInput): Promise<LoginResponseDTO> {
    const userData: UserDTO = await this.riderService.getUser(loginData.email);
    return {
      access_token: "jwt",
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        type: userData.type,
      },
    };
  }
}
