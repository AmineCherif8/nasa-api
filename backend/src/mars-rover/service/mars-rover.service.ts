import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { MarsRoverServicePort } from "./mars-rover.service.port";
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { PhotosRover } from "../entity/mars-rover.entity";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class MarsRoverService implements MarsRoverServicePort {
  constructor(
    private readonly config: ConfigService,
    private httpService: HttpService
  ) {}

  async getAllMarsRover(
    sol: number,
    name: string,
    roverName: string
  ): Promise<PhotosRover[]> {
    const url = this.formURL(
      `api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${name}&api_key=`
    );
    const { data } = await firstValueFrom(
      this.httpService.get<PhotosRover[]>(url)
    );
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

  private formURL(uri: string) {
    return `${this.config.get("API_URL")}${uri}${this.config.get(
      "TOKEN_NASA"
    )}`;
  }
}
