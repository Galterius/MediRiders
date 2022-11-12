import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MedicalCenterDocument = HydratedDocument<MedicalCenter>;

@Schema()
export class MedicalCenter {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  type: string;

  @Prop()
  Gtoken: string;
}

export const MedicalCenterSchema = SchemaFactory.createForClass(MedicalCenter);
