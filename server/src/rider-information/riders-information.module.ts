import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { RiderInformation, RiderInformationSchema } from "./model/riders-information.schema";
import { RiderInformationResolver } from "./riders-information.resolver";
import { RiderInformationService } from "./riders-information.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: RiderInformation.name, schema: RiderInformationSchema }])],
  providers: [RiderInformationResolver, RiderInformationService],
})
export class RiderInformationModule {}
