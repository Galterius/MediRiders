import { NestFactory } from "@nestjs/core";
import environment from "@shared/configs/environment";
import { AppModule } from "./app.module";

(async () => {
  const app = await NestFactory.create(AppModule);
  const port = environment.get("server.port");
  await app.listen(port);
})();
