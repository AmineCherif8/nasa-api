import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  getCameraRovers,
  getMarsRovers,
  getRoversName,
} from "../../service/MarsRover.service";
import Rover from "../Rover/Rover";

const SearchBar = () => {
  const [roversName, setRoversName] = useState<string[]>([]);
  const [roversCameraName, setRoversCameraName] = useState<string[]>([]);
  const [rovers, setRovers] = useState<any>();

  const [currentRoverName, setCurrentRoverName] = useState<string | null>();
  const [currentCameraName, setCurrentCameraName] = useState<string | null>();
  const [currentSolDistance, setCurrentSolDistance] = useState<number>();
  useEffect(() => {
    const getData = async () => {
      const { data } = await getCameraRovers();
      setRoversCameraName(data);
    };

    const getListRoversName = async () => {
      const { data } = await getRoversName();
      setRoversName(data);
    };

    getData();
    getListRoversName();
  }, [setRoversCameraName, setRoversName, setRovers]);

  const getAllRovers = async () => {
    const { data } = await getMarsRovers(
      currentSolDistance,
      currentCameraName,
      currentRoverName
    );
    setRovers(data.photos);
  };

  return (
    <>
      <Box sx={{ p: "1em" }}>
        <Grid spacing={1.3} container justifyContent="flex">
          <Grid item>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={roversName}
              onChange={(e, value) => setCurrentRoverName(value)}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Rover Name" />
              )}
            />
          </Grid>
          <Grid item>
            <Autocomplete
              disablePortal
              id="combo-box-demo-2"
              onChange={(e, value) => setCurrentCameraName(value)}
              options={roversCameraName}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Camera Rover Name" />
              )}
            />
          </Grid>
          <Grid item>
            <TextField
              onChange={(event) =>
                setCurrentSolDistance(Number(event.target.value))
              }
              id="outlined-basic"
              label="Sol"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button
              onClick={getAllRovers}
              sx={{ padding: "1em" }}
              variant="outlined"
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: "1em", marginBottom: "1em" }} />
        <Rover rovers={rovers} />
      </Box>
    </>
  );
};

export default SearchBar;
