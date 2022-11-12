import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { RiderInformationDTO } from "./dto/rider-information.dto";
import { RiderInformationInput } from "./dto/rider-information.input";
import { RiderInformationService } from "./riders-information.service";

@Resolver(() => RiderInformationDTO)
export class RiderInformationResolver {
  constructor(private readonly riderService: RiderInformationService) {}

  @Query(() => RiderInformationDTO)
  async getRiderInformation(@Args("riderId") riderId: string) {
    return this.riderService.getRiderInformation(riderId);
  }

  @Mutation(() => RiderInformationDTO)
  async createRiderInformation(@Args("riderInformation") riderInformation: RiderInformationInput) {
    return this.riderService.create(riderInformation);
  }
}
