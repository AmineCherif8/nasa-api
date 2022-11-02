import { HttpModule, HttpService } from "@nestjs/axios";
import {
  CacheInterceptor,
  CacheModule as BaseCacheModule,
  Module,
} from "@nestjs/common";
import { MarsRoverController } from "../controller/mars-rover.controller";
import { MarsRoverService } from "../service/mars-rover.service";
import * as redisStore from "cache-manager-ioredis";
import type { RedisClientOptions } from "redis";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    BaseCacheModule.registerAsync<RedisClientOptions>({
      useFactory: () => {
        return {
          store: redisStore,
          host: process.env.REDIS_HOST,
          port: process.env.REDIS_PORT,
          ttl: 60,
        };
      },
    }),
    HttpModule,
  ],
  controllers: [MarsRoverController],
  providers: [
    MarsRoverService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [BaseCacheModule],
})
export class MarsRoverModule {}
