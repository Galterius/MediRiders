import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { MedicalCentersModule } from "src/modules/medical-centers/medical-centers.module";
import { RiderModule } from "src/modules/riders/riders.module";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./passport/local.strategy";

@Module({
  imports: [MedicalCentersModule, RiderModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
