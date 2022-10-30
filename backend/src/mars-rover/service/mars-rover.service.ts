import { Injectable } from "@nestjs/common";
import { MarsRoverServicePort } from "./mars-rover.service.port";
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { Photos } from "../entity/mars-rover.entity";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MarsRoverService implements MarsRoverServicePort {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService
  ) {}

  async getAllMarsRover(
    sol: number,
    name: string,
    roverName: string
  ): Promise<Photos> {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${name}&api_key=KnjldQZW9SEUJLzaC2Inqbame82E0A8yRXIE3APn`;
    const { data } = await firstValueFrom(this.httpService.get<Photos>(url));

    return data;
  }

  getAllRoversCameraName(): string[] {
    const roversCameraName = [
      "FHAZ",
      "RHAZ",
      "MAST",
      "CHEMCAM",
      "MAHLI",
      "MARDI",
      "NAVCAM",
      "PANCAM",
      "MINITES",
    ];
    return roversCameraName;
  }

  getAllRoversName(): string[] {
    const roversName = ["Curiosity", "Opportunity", "Spirit"];
    return roversName;
  }
}
