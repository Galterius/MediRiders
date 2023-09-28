import { registerEnumType } from "@nestjs/graphql";

export enum State {
  NEW,
  PICKED_UP,
  DELIVERED,
  CANCELLED,
}

registerEnumType(State, { name: "State" });
