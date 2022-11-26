import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { States } from "../dto/state.types";

@Schema()
export class Order extends Document {
  @Prop()
  medicId: string;

  @Prop()
  description: string;

  @Prop()
  state: States;

  @Prop()
  isCancelled: boolean;

  @Prop()
  canceledBy: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
