import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserDTO } from "./dto/user.dto";
import { UserInput } from "./dto/user.input";
import { UserService } from "./user.service";
import { EveryRole } from "@shared/utils/decorators";

@Resolver()
export class UserResolver {
  constructor(private readonly riderService: UserService) {}

  @Query(() => UserDTO)
  @EveryRole()
  async getUser(@Args("email") email: string) {
    return this.riderService.getUser(email);
  }

  @Mutation(() => UserDTO)
  async createUser(@Args() user: UserInput) {
    return this.riderService.create(user);
  }
}
