import axios from "axios";
import { IRovers } from "../@types/MarsRover";

const client = axios.create({
  headers: {
    "X-Authorization": "",
  },
  baseURL: "/api/v1",
});

export const getMarsRovers = (
  sol: number | undefined,
  name: string | undefined,
  roverName: string | undefined
) => {
  return client.get<IRovers>(`rovers/${roverName}/sol/${sol}/camera/${name}/`);
};

export const getCameraRovers = () => {
  return client.get<string[]>(`/roversCameraName/`);
};

export const getRoversName = () => {
  return client.get<[]>(`/roversName/`);
};
