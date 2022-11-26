import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { GraphQLModule } from "./shared/modules/GraphQLModule";
import { MongooseModule } from "./shared/modules/MongooseModule";
import { RiderInformationModule } from "./modules/rider-information/riders-information.module";
import { AuthModule } from "./shared/auth/auth.module";
import { OderModule } from "./modules/order/order.module";
@Module({
  imports: [GraphQLModule, MongooseModule, UserModule, RiderInformationModule, AuthModule, OderModule],
})
export class AppModule {}
