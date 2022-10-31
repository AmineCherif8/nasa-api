import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { MarsRoverServicePort } from "./mars-rover.service.port";
import { firstValueFrom } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { PhotosRover } from "../entity/mars-rover.entity";

@Injectable()
export class MarsRoverService implements MarsRoverServicePort {
  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager,
    private httpService: HttpService
  ) {}

  async getAllMarsRover(
    sol: number,
    name: string,
    roverName: string
  ): Promise<PhotosRover[]> {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=${name}&api_key=KnjldQZW9SEUJLzaC2Inqbame82E0A8yRXIE3APn`;
    const { data } = await firstValueFrom(
      this.httpService.get<PhotosRover[]>(url)
    );

    this.cacheManager.set("rover-mars", data);

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
