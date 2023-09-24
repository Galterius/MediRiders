import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import environment from "@shared/configs/environment";
import { UserModule } from "src/modules/user/user.module";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./passport/jwt.strategy";
import { RoleBasedJwtStrategy } from "./passport/role-based-jwt.strategy";

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: environment.get("access_token.duration") },
      secret: environment.get("access_token.secret"),
    }),
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, RoleBasedJwtStrategy],
})
export class AuthModule {}
