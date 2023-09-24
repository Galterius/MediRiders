import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import environment from "@shared/configs/environment";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/modules/user/model/user.schema";
import { UserService } from "src/modules/user/user.service";

@Injectable()
export class RoleBasedJwtStrategy extends PassportStrategy(Strategy, "role-jwt") {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.get("access_token.secret"),
    });
  }

  async validate(payload: any): Promise<User> {
    const user = await this.userService.findUserById(payload.userId);
    if (!user) {
      throw new UnauthorizedException("Invalid access token!");
    }

    return user;
  }
}
