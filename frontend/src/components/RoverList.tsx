import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { IMarsRover, RoverProps } from "../@types/MarsRover";

const RoverList = ({
  id,
  distance,
  cameraName,
  picture,
  earthDate,
  status,
  roverName,
  cameraFullName,
}: RoverProps) => {
  return (
    <React.Fragment>
      <TableRow key={id}>
        <TableCell>{distance}</TableCell>
        <TableCell>{cameraName}</TableCell>
        <TableCell>{cameraFullName}</TableCell>
        <TableCell>{earthDate}</TableCell>
        <TableCell>{picture}</TableCell>
        <TableCell>{roverName}</TableCell>
        <TableCell>{status}</TableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default RoverList;
