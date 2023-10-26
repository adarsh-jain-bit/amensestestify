import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Stack } from "@mui/system";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Avatar, Box, useMediaQuery } from "@mui/material";
import ModalItem1 from "../Modal/ModalItem1";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetailModal = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const onlyLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("click");
  };

  return (
    <>
      <Button
        sx={{
          padding: "5px 8px",
          background: "#EDEDED",
          color: "black",
        }}
        onClick={handleClickOpen}
      >
        Details
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="lg"
      >
        <DialogContent sx={{ p: "50px" }}>
          <Stack direction="row" justifyContent="space-between">
            <Button
              variant="contained"
              sx={{
                background: "#ededed",
                color: "black",
                "&:hover": {
                  background: "#ededed",
                },
              }}
            >
              Previous Sample Question
            </Button>
            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
          </Stack>
          <Stack direction={onlyLargeScreen ? "column" : "row"} gap={4} mt={6}>
            <Stack>
              <Typography variant="h5">
                CNC machinist (imperial measurements)
              </Typography>
              <Typography mt={2}>
                This test evaluates potential CNC machinists' knowledge and
                experience in operating, programming, and machining parts using
                CNC machines and will identify candidates who are proficient in
                the field and can prove their experience in CNC manufacturing.
              </Typography>
              <ModalItem1 />
              <Typography sx={{ color: "black", mt: "20px" }}>
                Covered skills
              </Typography>
              <Typography display="flex" alignItems="center">
                <CheckIcon sx={{ marginRight: "5px", fontSize: "17px" }} />
                Devising CNC operations
              </Typography>
              <Typography display="flex" alignItems="center">
                <CheckIcon sx={{ marginRight: "5px", fontSize: "17px" }} />
                Operating CNC machines appropriately
              </Typography>
              <Typography display="flex" alignItems="center">
                <CheckIcon sx={{ marginRight: "5px", fontSize: "17px" }} />
                Programming CNC machines
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "black", mt: "20px" }}>
                This test is relevant for
              </Typography>
              <Typography sx={{ fontSize: "17px" }}>
                CNC machinists, manufacturing specialists, production workers,
                machinists
              </Typography>
            </Stack>
            <Stack>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Description
              </Typography>
              <Typography marginY={1}>
                CNC machining is a revolutionary manufacturing process where
                infinite amounts of parts can be produced that ensure a high
                level of detail and precision, and range from unlimited designs
                along with a vast number of different materials.
              </Typography>
              <Typography marginY={1}>
                CNC machines require an operator who has a high level of
                technical and problem-solving skills and who can adapt to
                diverse situations and optimize the efficiency of the machine
                itself and the tools used in the machining process.
              </Typography>
              <Typography marginY={1}>
                A CNC machinist should create their knowledge foundation through
                technical information, but will eventually become proficient
                during the time spent experiencing and operating CNC machines.
              </Typography>
              <Typography marginY={1}>
                The CNC machinist test evaluates a candidate's proven experience
                in this field, where knowledge and know-how can only be acquired
                with experience and time spent machining.
              </Typography>
              <Typography marginY={1}>
                This test will reveal a candidate's capability to operate a CNC
                machine correctly and ensure the problem-solving and machining
                skills needed to manufacture parts that meet the requirements
                expected.
              </Typography>
              <Typography sx={{ fontSize: "20px", color: "black", mt: "20px" }}>
                About the subject-matter expert
              </Typography>
              <Stack direction="row" alignItems="baseline" gap={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Box>
                  <Typography
                    sx={{ fontSize: "20px", color: "black", mt: "20px" }}
                  >
                    Emilio A.
                  </Typography>
                  <Typography marginY={1}>
                    Emilio has a degree in product design and manufacturing and
                    he has worked across a number of roles, including as a
                    CAD/CAM Technical Designer and CNC Machinist. Currently, he
                    works in the automotive lean manufacturing industry. Emilio
                    is professionally trained on industrial and tabletop CNC
                    machines, CAM programming, and a wide range of associated
                    software programs.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DetailModal;
