import { Photos } from "../entity/mars-rover.entity";

export interface MarsRoverServicePort {
  getAllMarsRover(sol: number, name: string): Promise<Photos>;
}
