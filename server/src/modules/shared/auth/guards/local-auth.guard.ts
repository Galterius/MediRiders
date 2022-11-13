import { ExecutionContext, Injectable } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class LocalAuthGuard extends AuthGuard("local") {
  constructor() {
    super();
  }

  getRequest(ctx: ExecutionContext) {
    const context = GqlExecutionContext.create(ctx);
    const request = context.getContext();
    request.body = context.getArgs().loginData;
    return request;
  }
}
