import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { RiderLocation } from "../dto/rider-information.location";

export type RiderInformationDocument = HydratedDocument<RiderInformation>;

@Schema()
export class RiderInformation {
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
