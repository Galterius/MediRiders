import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { User } from "@modules/user/model/user.schema";
import { State } from "@shared/utils/enums/state-enum";

@Schema()
export class Order extends Document {
  @Prop({ required: true, type: MongooseSchema.Types.ObjectId })
  medicId: User;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, enum: State })
  state: State;

  @Prop({ required: true, default: false })
  isCancelled: boolean;

  @Prop({ required: false, type: MongooseSchema.Types.ObjectId, default: null })
  canceledBy: User | null;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, default: null })
  riderId: User | null;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
