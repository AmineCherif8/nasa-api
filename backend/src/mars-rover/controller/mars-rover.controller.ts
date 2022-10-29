import { Controller, Get, Header, Param } from "@nestjs/common";
import { Photos } from "../entity/mars-rover.entity";
import { MarsRoverService } from "../service/mars-rover.service";

@Controller("/api/v1")
export class MarsRoverController {
  constructor(private readonly marsRoverService: MarsRoverService) {}
  @Get("/sol/:sol/camera/:name")
  @Header("Content-Type", "application/json")
  getMarsRover(
    @Param("sol") sol: number,
    @Param("name") name: string
  ): Promise<Photos> {
    return this.marsRoverService.getAllMarsRover(sol, name);
  }
}
