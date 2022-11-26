import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RiderLocation {
  @Field(() => Number)
  lat: number;

  @Field(() => Number)
  lng: number;
}
