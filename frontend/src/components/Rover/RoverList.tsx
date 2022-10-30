import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { RoverProps } from "../../../src/@types/MarsRover";
import RoverModal from "./RoverModal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import Chip from "@mui/material/Chip";

const RoverList = ({
  id,
  distance,
  cameraName,
  picture,
  earthDate,
  status,
  roverName,
  cameraFullName,
  landingDate,
  launchDate,
  roverId,
}: RoverProps) => {
  return (
    <React.Fragment>
      <TableRow key={id}>
        <TableCell>
          <Chip label={distance + "sol"} />
        </TableCell>
        <TableCell>{cameraName}</TableCell>
        <TableCell>{cameraFullName}</TableCell>
        <TableCell>{earthDate}</TableCell>
        <TableCell>
          <RoverModal
            title={cameraFullName}
            picture={picture}
            landingDate={landingDate}
            launchDate={launchDate}
            roverId={roverId}
            roverName={roverName}
          ></RoverModal>
        </TableCell>
        <TableCell>{roverName}</TableCell>
        <TableCell>
          {status === "active" ? (
            <CheckCircleIcon sx={{ verticalAlign: "middle", color: "green" }} />
          ) : (
            <ErrorIcon sx={{ verticalAlign: "middle", color: "red" }} />
          )}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
export default RoverList;
