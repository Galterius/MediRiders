import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { RiderLocation } from "../dto/rider-information.location";

@Schema()
export class RiderInformation extends Document {
  @Prop()
  readonly riderId: string;

  @Prop()
  readonly location: RiderLocation;

  @Prop()
  readonly updatedAt: number;

  @Prop()
  readonly currentState: string;
}

export const RiderInformationSchema = SchemaFactory.createForClass(RiderInformation);
