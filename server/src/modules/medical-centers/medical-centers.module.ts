import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MedicalCenter, MedicalCenterSchema } from "./model/medical-centers.schema";
import { MedicalCentersResolver } from "./medical-centers.resolver";
import { MedicalCentersService } from "./medical-centers.service";

@Module({
  imports: [MongooseModule.forFeature([{ name: MedicalCenter.name, schema: MedicalCenterSchema }])],
  providers: [MedicalCentersResolver, MedicalCentersService],
  exports: [MedicalCentersService],
})
export class MedicalCentersModule {}
