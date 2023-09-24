import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import environment from "@shared/configs/environment";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: environment.get("access_token.secret"),
    });
  }

  async validate(payload: any) {
    return { userId: payload.userId };
  }
}
