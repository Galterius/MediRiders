import { Field, InputType, ObjectType } from "@nestjs/graphql";

export type States = "new" | "picked up" | "delivered" | "cancelled";

// @InputType()
// export class StateInput {
//   @Field(() => String)
//   state: States;
// }

@ObjectType()
export class OrderDTO {
  @Field(() => String)
  id: string;

  @Field(() => String)
  medicId: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  state: States;

  @Field(() => Boolean)
  isCancelled: boolean;

  @Field(() => String, { nullable: true })
  canceledBy: string | null;
}

@InputType()
export class OrderInput {
  @Field(() => String)
  medicId: string;

  @Field(() => String)
  description: string;

  @Field(() => String, { defaultValue: "new" })
  state: States = "new";

  @Field(() => Boolean, { defaultValue: false })
  isCancelled: boolean;

  @Field(() => String, { nullable: true })
  canceledBy?: string | null;
}
