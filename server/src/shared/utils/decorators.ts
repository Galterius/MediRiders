import { createParamDecorator, ExecutionContext, UseGuards, applyDecorators, SetMetadata } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { RoleJwtAuthGuard } from "../auth/guards/role-jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { ROLES } from "./constants";

export const CurrentUser = createParamDecorator((data: unknown, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  return ctx.getContext().req.user;
});

export const RiderRole = () =>
  applyDecorators(UseGuards(RoleJwtAuthGuard, RolesGuard), SetMetadata("roles", [ROLES.RIDER]));

export const MedicRole = () =>
  applyDecorators(UseGuards(RoleJwtAuthGuard, RolesGuard), SetMetadata("roles", [ROLES.MEDIC]));
