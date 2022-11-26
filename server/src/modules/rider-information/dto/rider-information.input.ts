import { Field, InputType } from "@nestjs/graphql";

@InputType()
class RiderLocationInput {
  @Field(() => Number)
  lat: number;

  @Field(() => Number)
  lng: number;
}

@InputType()
export class RiderInformationInput {
  @Field(() => String)
  readonly riderId: string;

  @Field(() => RiderLocationInput)
  readonly location: { lat: number; lng: number };

  @Field(() => Number)
  readonly updatedAt: number;

  @Field(() => String)
  readonly currentState: string;
}
