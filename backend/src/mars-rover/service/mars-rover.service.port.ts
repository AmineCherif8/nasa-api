import { Photos, PhotosRover } from "../entity/mars-rover.entity";

export interface MarsRoverServicePort {
  getAllMarsRover(
    sol: number,
    name: string,
    roverName: string
  ): Promise<PhotosRover[]>;

  getAllRoversCameraName(): string[];

  getAllRoversName(): string[];
}
