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
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMarsRover, IRovers, RoverParams } from "../@types/MarsRover";
import { getMarsRovers } from "../service/MarsRover.service";
import RoverList from "./RoverList";

const Rover = () => {
  const { sol, name } = useParams<RoverParams>();
  const [rovers, setRovers] = useState<IMarsRover[]>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await getMarsRovers(sol, name);
      setRovers(data.photos);
      console.log(data);
    };

    getData();
  }, [setRovers]);

  return (
    <React.Fragment>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ color: "none", marginTop: "1em" }}>
                <TableCell align="right">SOL</TableCell>
                <TableCell align="right">Camera</TableCell>
                <TableCell align="right">Camera Full Name</TableCell>
                <TableCell align="right">Earth Date</TableCell>
                <TableCell align="left">Picture</TableCell>
                <TableCell align="right">Rover Name</TableCell>
                <TableCell align="right">Status</TableCell>
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
