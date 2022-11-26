import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { States } from "../dto/state.types";

@Schema()
export class Order extends Document {
  @Prop({ required: true })
  medicId: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  state: States;

  @Prop({ required: true, default: false })
  isCancelled: boolean;

  @Prop({ default: null })
  canceledBy: string | null;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
