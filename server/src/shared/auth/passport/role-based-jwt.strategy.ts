import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "src/modules/user/model/user.schema";
import { UserService } from "src/modules/user/user.service";

@Injectable()
export class RoleBasedJwtStrategy extends PassportStrategy(Strategy, "role-jwt") {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: "CREATE.ENV.IDIOT",
    });
  }

  async validate(payload: any): Promise<User> {
    const userId = payload.sub;
    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new UnauthorizedException("Invalid access token!");
    }

    return user;
  }
}
