import { Module } from "@nestjs/common";
import { RiderModule } from "./modules/riders/riders.module";
import { GraphQLModule } from "./modules/shared/modules/GraphQLModule";
import { MongooseModule } from "./modules/shared/modules/MongooseModule";

@Module({
  imports: [GraphQLModule, MongooseModule, RiderModule],
})
export class AppModule {}
