import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserDTO {
  @Field(() => String)
  readonly id: string;

  @Field(() => String)
  readonly name: string;

  @Field(() => String)
  readonly email: string;

  @Field(() => String)
  readonly type?: string;

  @Field(() => String)
  readonly Gtoken: string;
}
