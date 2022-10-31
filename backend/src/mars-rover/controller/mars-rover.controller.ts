import {
  CacheInterceptor,
  Controller,
  Get,
  Header,
  Param,
  UseInterceptors,
} from "@nestjs/common";
import { PhotosRover } from "../entity/mars-rover.entity";
import { MarsRoverService } from "../service/mars-rover.service";

@UseInterceptors(CacheInterceptor)
@Controller("/api/v1")
export class MarsRoverController {
  constructor(private readonly marsRoverService: MarsRoverService) {}

  @Get("rovers/:roverName/sol/:sol/camera/:name")
  @Header("Content-Type", "application/json")
  getMarsRover(
    @Param("sol") sol: number,
    @Param("name") name: string,
    @Param("roverName") roverName: string
  ): Promise<PhotosRover[]> {
    return this.marsRoverService.getAllMarsRover(sol, name, roverName);
  }

  @Get("/roversName")
  @Header("Content-Type", "application/json")
  getRoversName(): string[] {
    return this.marsRoverService.getAllRoversName();
  }

  @Get("/roversCameraName")
  @Header("Content-Type", "application/json")
  getRoversCameraName(): string[] {
    return this.marsRoverService.getAllRoversCameraName();
  }
}
