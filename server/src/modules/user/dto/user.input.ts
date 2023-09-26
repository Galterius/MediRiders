import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class UserInput {
  @Field(() => String)
  readonly name: string;

  @Field(() => String)
  readonly email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  readonly role: string;

  @Field(() => String, { nullable: true })
  readonly Gtoken?: string;
}
