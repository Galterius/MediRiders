import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ default: uuidv4() })
  id: string;

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

export const UserSchema = SchemaFactory.createForClass(User);
