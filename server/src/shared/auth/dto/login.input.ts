import { ArgsType, Field } from "@nestjs/graphql";
import { IsEmail, MinLength } from "class-validator";

@ArgsType()
export class LoginInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  @MinLength(6)
  password: string;
}
