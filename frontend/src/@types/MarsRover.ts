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
  landingDate: string;
  launchDate: string;
  roverId: number;
}

export type RoverParams = {
  sol: number | undefined;
  name: string | undefined;
  roverName: string | undefined;
};

export type AllRoverProps = {
  rovers: IMarsRover[];
};

export type IRoverModal = {
  title: string;
  picture: string;
  landingDate: string;
  launchDate: string;
  roverId: number;
  roverName: string;
};

export type SearchRover = {
  roversName: string[];
  roversCameraName: string[];
};
