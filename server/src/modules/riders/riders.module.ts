import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Rider, RiderSchema } from "./model/riders.schema";
import { RiderResolver } from "./riders.resolver";
import { RiderService } from "./riders.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: Rider.name, schema: RiderSchema }])],
  providers: [RiderResolver, RiderService],
})
export class RiderModule {}
