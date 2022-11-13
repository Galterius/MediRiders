import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { MedicalCentersService } from "src/modules/medical-centers/medical-centers.service";
import { RiderDTO } from "src/modules/riders/dto/rider.dto";
import { RiderService } from "src/modules/riders/riders.service";
import { LoginResponseDTO } from "./dto/login-respons.dto";
import { LoginInput } from "./dto/login.input";
import { User } from "./dto/user.type";

@Injectable()
export class AuthService {
  constructor(
    private riderService: RiderService,
    private medicalCenterService: MedicalCentersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const userData =
      (await this.medicalCenterService.getMedicalCenter(email)) ?? (await this.riderService.getRider(email));

    if (userData && userData.password === pass) {
      return {
        id: userData.id,
        name: userData.name,
        type: userData instanceof RiderDTO ? "rider" : "medic",
        email: userData.email,
      };
    }

    return null;
  }

  async login(loginData: LoginInput): Promise<LoginResponseDTO> {
    const userData =
      (await this.medicalCenterService.getMedicalCenter(loginData.email)) ??
      (await this.riderService.getRider(loginData.email));

    const actualUser: User = {
      id: userData.id,
      name: userData.name,
      type: userData instanceof RiderDTO ? "rider" : "medic",
      email: userData.email,
    };

    return {
      access_token: "jwt",
      user: actualUser,
    };
  }
}
