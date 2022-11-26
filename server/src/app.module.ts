import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { GraphQLModule } from "./modules/shared/modules/GraphQLModule";
import { MongooseModule } from "./modules/shared/modules/MongooseModule";
import { RiderInformationModule } from "./modules/rider-information/riders-information.module";
import { AuthModule } from "./modules/shared/auth/auth.module";
@Module({
  imports: [GraphQLModule, MongooseModule, UserModule, RiderInformationModule, AuthModule],
})
export class AppModule {}
