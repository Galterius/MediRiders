import { Field, ObjectType } from "@nestjs/graphql";
import { MappedUser } from "./user.type";

@ObjectType()
export class LoginResponseDTO {
  @Field(() => String)
  access_token: string;

  @Field(() => MappedUser)
  user: MappedUser;
}
