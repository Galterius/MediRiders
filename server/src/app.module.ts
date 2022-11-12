import { Module } from "@nestjs/common";
import { GraphQLModule } from "./modules/shared/modules/GraphQLModule";

@Module({
  imports: [GraphQLModule],
})
export class AppModule {}
