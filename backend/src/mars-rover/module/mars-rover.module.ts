import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { MarsRoverController } from "../controller/mars-rover.controller";
import { MarsRoverService } from "../service/mars-rover.service";

@Module({
  imports: [HttpModule],
  controllers: [MarsRoverController],
  providers: [MarsRoverService],
})
export class MarsRoverModule {}
