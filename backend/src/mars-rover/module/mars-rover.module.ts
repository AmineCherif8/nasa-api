import { HttpModule } from "@nestjs/axios";
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

@Module({
  imports: [
    BaseCacheModule.registerAsync<RedisClientOptions>({
      useFactory: () => {
        return {
          store: redisStore,
          url: "redis://localhost:6379",
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
