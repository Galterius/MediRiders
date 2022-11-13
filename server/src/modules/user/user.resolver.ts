import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserDTO } from "./dto/user.dto";
import { UserInput } from "./dto/user.input";
import { UserService } from "./user.service";

@Resolver()
export class RiderResolver {
  constructor(private readonly riderService: UserService) {}

  @Query(() => UserDTO)
  async getUser(@Args("email") email: string) {
    return this.riderService.getUser(email);
  }

  @Mutation(() => UserDTO)
  async createUser(@Args("user") user: UserInput) {
    return this.riderService.create(user);
  }
}
