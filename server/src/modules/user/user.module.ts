import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./model/user.schema";
import { RiderResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [RiderResolver, UserService],
  exports: [UserService],
})
export class RiderModule {}
