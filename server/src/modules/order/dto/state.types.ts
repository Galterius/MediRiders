import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { State } from "@shared/utils/enums/state-enum";

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

  @Field(() => State)
  state: State;

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

  @Field(() => State, { defaultValue: State.NEW })
  state: State = State.NEW;

  @Field(() => Boolean, { defaultValue: false })
  isCancelled: boolean;

  @Field(() => String, { nullable: true })
  canceledBy?: string | null;
}
