import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { RiderModule } from "src/modules/user/user.module";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./passport/local.strategy";

@Module({
  imports: [RiderModule, PassportModule],
  providers: [AuthService, AuthResolver, LocalStrategy],
})
export class AuthModule {}
