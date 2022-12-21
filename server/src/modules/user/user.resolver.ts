import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { JwtAuthGuard } from "../../shared/auth/guards/jwt-auth.guard";
import { UserDTO } from "./dto/user.dto";
import { UserInput } from "./dto/user.input";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
  constructor(private readonly riderService: UserService) {}

  @Query(() => UserDTO)
  @UseGuards(JwtAuthGuard)
  async getUser(@Args("email") email: string) {
    return this.riderService.getUser(email);
  }

  @Mutation(() => UserDTO)
  async createUser(@Args() user: UserInput) {
    return this.riderService.create(user);
  }
}
