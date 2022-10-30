export interface ICamera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export interface IRover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}

export interface IMarsRover {
  id: number;
  sol: number;
  camera: ICamera;
  img_src: string;
  earth_date: string;
  rover: IRover;
}

export interface IRovers {
  photos: IMarsRover[];
}

export interface RoverProps {
  id: number;
  distance: number;
  cameraName: string;
  cameraFullName: string;
  picture: string;
  earthDate: string;
  status: string;
  roverName: string;
}

export type RoverParams = {
  sol: string | undefined;
  name: string | undefined;
};
