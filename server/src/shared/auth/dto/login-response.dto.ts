import { Field, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class LoginResponseDTO {
  @Field(() => String)
  access_token: string;
}
