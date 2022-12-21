import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  constructor() {
    super();
  }

  getRequest(ctx: ExecutionContext) {
    const context = GqlExecutionContext.create(ctx);
    return context.getContext().req;
  }
}
