import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Header,
  Param,
  UseInterceptors,
} from "@nestjs/common";

import { PhotosRover } from "../entity/mars-rover.entity";
import { MarsRoverService } from "../service/mars-rover.service";

@Controller("/api/v1")
export class MarsRoverController {
  constructor(private readonly marsRoverService: MarsRoverService) {}

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(60)
  @Get("rovers/:roverName/sol/:sol/camera/:name")
  @Header("Content-Type", "application/json")
  getMarsRover(
    @Param("sol") sol: number,
    @Param("name") name: string,
    @Param("roverName") roverName: string
  ): Promise<PhotosRover[]> {
    const allRovers = this.marsRoverService.getAllMarsRover(
      sol,
      name,
      roverName
    );

    return allRovers;
  }

  @UseInterceptors(CacheInterceptor)
  @Get("/roversName")
  @Header("Content-Type", "application/json")
  async getRoversName(): Promise<any> {
    return this.marsRoverService.getAllRoversName();
  }

  @UseInterceptors(CacheInterceptor)
  @Get("/roversCameraName")
  @Header("Content-Type", "application/json")
  getRoversCameraName(): string[] {
    return this.marsRoverService.getAllRoversCameraName();
  }
}
