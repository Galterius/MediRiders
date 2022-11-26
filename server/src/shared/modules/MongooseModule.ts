import { Module } from "@nestjs/common";
import { MongooseModule as BaseMongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [BaseMongooseModule.forRoot("mongodb://localhost/MediRiders")],
  exports: [],
})
export class MongooseModule {}
