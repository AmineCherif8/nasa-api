import { ForbiddenException, Injectable } from "@nestjs/common";
import { MarsRoverServicePort } from "./mars-rover.service.port";
import { catchError, filter, firstValueFrom, map, Observable } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { MarsRover, Photos } from "../entity/mars-rover.entity";
import { ConfigService } from "@nestjs/config";
import { AxiosResponse } from "axios";

@Injectable()
export class MarsRoverService implements MarsRoverServicePort {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  async getAllMarsRover(sol: number, name: string): Promise<Photos> {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${name}&api_key=KnjldQZW9SEUJLzaC2Inqbame82E0A8yRXIE3APn`;
    const { data } = await firstValueFrom(this.httpService.get<Photos>(url));

    return data;
  }
}
