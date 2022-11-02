import { Controller, Get, Header, Param, ParseIntPipe } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";
import { map } from "rxjs";
import { MarsRoverService } from "./mars-rover/service/mars-rover.service";

@Controller("/api/v1")
export class AppController {
  constructor(private readonly marsRoverService: MarsRoverService) {}
}
