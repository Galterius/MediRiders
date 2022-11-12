import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { MedicalCenterDTO } from "./dto/medical-centers.dto";
import { MedicalCenterInput } from "./dto/medical-centers.input";
import { MedicalCentersService } from "./medical-centers.service";

@Resolver(() => MedicalCenterDTO)
export class MedicalCentersResolver {
  constructor(private readonly riderService: MedicalCentersService) {}

  @Query(() => String)
  async getMedicalCenter(@Args("email") email: string) {
    return this.riderService.getMedicalCenter(email);
  }

  @Mutation(() => MedicalCenterDTO)
  async createMedicalCenter(@Args("medicalCenter") medicalCenter: MedicalCenterInput) {
    return this.riderService.create(medicalCenter);
  }
}
