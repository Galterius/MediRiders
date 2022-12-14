import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class MappedUser {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  role?: string;

  @Field(() => String)
  email: string;
}
