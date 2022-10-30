import axios from "axios";
import { IRovers } from "../@types/MarsRover";

const client = axios.create({
  headers: {
    "X-Authorization": "",
  },
  baseURL: "/api/v1",
});

export const getMarsRovers = (
  sol: string | undefined,
  name: string | undefined
) => {
  return client.get<IRovers>(`/sol/${Number(sol)}/camera/${name}/`);
};
