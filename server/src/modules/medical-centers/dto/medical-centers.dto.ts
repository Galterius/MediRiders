import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MedicalCenterDTO {
  @Field(() => String)
  readonly name: string;

  @Field(() => String)
  readonly email: string;

  @Field(() => String)
  readonly password: string;

  @Field(() => String)
  readonly type: string;

  @Field(() => String)
  readonly Gtoken: string;
}