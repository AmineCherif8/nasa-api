import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  // Bind modules to Nest application
  const app = await NestFactory.create(AppModule);

  // Start server on dedicated port
  await app.listen(3003);
}

bootstrap();
