import { Module } from "@nestjs/common";
import { MongooseModule as BaseMongooseModule } from "@nestjs/mongoose";
import environment from "@shared/configs/environment";

@Module({
  imports: [BaseMongooseModule.forRoot(environment.get("db.connection_string"))],
  exports: [],
})
export class MongooseModule {}
