import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { AllRoverProps } from "../../@types/MarsRover";
import RoverList from "./RoverList";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import PublicIcon from "@mui/icons-material/Public";
import TocIcon from "@mui/icons-material/Toc";
import CellTowerIcon from "@mui/icons-material/CellTower";

const Rover = ({ rovers }: AllRoverProps) => {
  return (
    <React.Fragment>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ color: "none", marginTop: "1em" }}>
                <TableCell>SOL</TableCell>
                <TableCell>Camera</TableCell>
                <TableCell>
                  <TocIcon sx={{ verticalAlign: "middle" }} />
                  Camera Full Name
                </TableCell>
                <TableCell>
                  <PublicIcon sx={{ verticalAlign: "middle" }} />
                  Earth Date
                </TableCell>
                <TableCell>
                  <CameraAltIcon sx={{ verticalAlign: "middle" }} />
                  Picture
                </TableCell>
                <TableCell>
                  <PrecisionManufacturingIcon
                    style={{ verticalAlign: "middle" }}
                  />
                  Rover Name
                </TableCell>
                <TableCell>
                  <CellTowerIcon style={{ verticalAlign: "middle" }} />
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rovers?.map((rover, index) => (
                <RoverList
                  key={index}
                  id={rover.id}
                  distance={rover.sol}
                  cameraName={rover.camera.name}
                  cameraFullName={rover.camera.full_name}
                  picture={rover.img_src}
                  earthDate={rover.earth_date}
                  status={rover.rover.status}
                  roverName={rover.rover.name}
                  landingDate={rover.rover.landing_date}
                  launchDate={rover.rover.launch_date}
                  roverId={rover.rover.id}
                ></RoverList>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </React.Fragment>
  );
};

export default Rover;
