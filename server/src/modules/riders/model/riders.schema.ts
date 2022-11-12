import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RiderDocument = HydratedDocument<Rider>;

@Schema()
export class Rider {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  Gtoken: string;
}

export const RiderSchema = SchemaFactory.createForClass(Rider);
