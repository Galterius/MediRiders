import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UserInput {
  @Field(() => String)
  readonly name: string;

  @Field(() => String)
  readonly email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  readonly type: string;

  @Field(() => String)
  readonly Gtoken: string;
}
