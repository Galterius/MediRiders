import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { RiderDTO } from "./dto/rider.dto";
import { RiderInput } from "./dto/rider.input";
import { RiderService } from "./riders.service";

@Resolver(() => RiderDTO)
export class RiderResolver {
  constructor(private readonly riderService: RiderService) {}

  @Query(() => RiderDTO)
  async getRider(@Args("email") email: string) {
    return this.riderService.getRider(email);
  }

  @Mutation(() => RiderDTO)
  async createRider(@Args("rider") rider: RiderInput) {
    return this.riderService.create(rider);
  }
}
