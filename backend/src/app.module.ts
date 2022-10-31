import { HttpModule } from "@nestjs/axios";
import { CacheModule, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MarsRoverModule } from "./mars-rover/module/mars-rover.module";
import { MarsRoverService } from "./mars-rover/service/mars-rover.service";

@Module({
  imports: [
    CacheModule.register(),
    MarsRoverModule,
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MarsRoverService],
})
export class AppModule {}
