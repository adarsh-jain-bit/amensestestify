import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetailModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{ p: "50px" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          dolor recusandae nulla architecto quam, eaque repellat rerum
          reiciendis, error, laboriosam quasi explicabo. Pariatur qui, eligendi
          praesentium recusandae officia nisi molestiae, non esse nobis fugit
          ipsum obcaecati maxime, ratione quis necessitatibus nam. Numquam
          dolores suscipit possimus repellendus optio delectus ipsum, ea minus
          aliquam voluptas? Quasi veritatis voluptates velit quam quos eos porro
          quas, expedita nisi recusandae enim laboriosam ex est magnam
          excepturi, totam debitis earum itaque in? Suscipit reiciendis, modi
          dolorem eos nam neque sapiente numquam rem voluptatibus iure incidunt
          quasi nobis est magni rerum. Saepe, dolore ut. Non, vel incidunt!
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DetailModal;
