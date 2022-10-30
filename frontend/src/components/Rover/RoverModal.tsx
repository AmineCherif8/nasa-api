import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import Image from "mui-image";
import Chip from "@mui/material/Chip";
import { Divider, Stack } from "@mui/material";
import { IRoverModal } from "../../@types/MarsRover";
const RoverModal = ({
  title,
  picture,
  landingDate,
  launchDate,
  roverId,
  roverName,
}: IRoverModal) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open picture
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Stack direction="row" spacing={1}>
              <Chip label={"ID Rover : " + roverId} variant="outlined" />
              <Chip label={"Lauch date : " + launchDate} variant="outlined" />
              <Chip
                label={"Landing date : " + landingDate}
                variant="outlined"
              />
            </Stack>
            <Divider sx={{ mt: "1em" }} />
            Photo taken from the camera {title} with the rover named {roverName}
            <Divider sx={{ mt: "1em" }} />
            <Image
              style={{ marginTop: "1em" }}
              src={picture}
              fit="contain"
            ></Image>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RoverModal;
