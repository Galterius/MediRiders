import { Module } from "@nestjs/common";
import { MedicalCentersModule } from "./modules/medical-centers/medical-centers.module";
import { RiderModule } from "./modules/riders/riders.module";
import { GraphQLModule } from "./modules/shared/modules/GraphQLModule";
import { MongooseModule } from "./modules/shared/modules/MongooseModule";
import { RiderInformationModule } from "./rider-information/riders-information.module";
@Module({
  imports: [GraphQLModule, MongooseModule, RiderModule, MedicalCentersModule, RiderInformationModule],
})
export class AppModule {}
