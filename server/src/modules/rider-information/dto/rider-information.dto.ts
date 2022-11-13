import { Field, ObjectType } from "@nestjs/graphql";
import { RiderLocation } from "./rider-information.location";

@ObjectType()
export class RiderInformationDTO {
  @Field(() => String)
  readonly riderId: string;

  @Field(() => RiderLocation)
  readonly location: { lat: number; lng: number };

  @Field(() => Number)
  readonly updatedAt: number;

  @Field(() => String)
  readonly currentState: string;
}
