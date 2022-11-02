import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  // Bind modules to Nest application
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Rovers on Mars")
    .setDescription("The rovers API description")
    .setVersion("1.0")
    .addTag("rovers")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  // Start server on dedicated port
  await app.listen(process.env.PORT ? parseInt(process.env.PORT) : 3000);
}

bootstrap();
