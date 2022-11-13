import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "./user.type";

@ObjectType()
export class LoginResponseDTO {
  @Field(() => String)
  access_token: string;

  @Field(() => User)
  user: User;
}
