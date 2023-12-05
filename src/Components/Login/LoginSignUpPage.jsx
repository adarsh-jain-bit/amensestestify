import React, { useState } from "react";
import { Stack, Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import ReactCardFlip from "react-card-flip";
import { Background, BackSidebox } from "../Common/GlobalWrapper";
import SignUp from "../Signup/SignUp";
import Login from "./Login";

const LoginSignUp = ({ onLogin }) => {
  const [flip, setFlip] = useState(false);

  return (
    <Background>
      <BackSidebox>
        <Grid width="50%" />
        <Grid mt={10} p={4} width="50%">
          <Typography variant="h5">
            Have an
            <Typography
              color="#7d5ce9"
              marginLeft="5px"
              variant="h5"
              component="span"
            >
              Account?
            </Typography>
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            labore!
          </Typography>
          <Box
            variant="outline"
            sx={{
              border: "1px solid black",
              boxShadow: "none",
              margin: "10px 0px",
              background: "white",
              width: "90px",
              height: "35px",
              borderRadius: "10px",
              textAlign: "center",
              padding: "6px",
              cursor: "pointer",
              "&:hover": {
                border: "1px solid green",
              },
            }}
            onClick={() => setFlip(!flip)}
          >
            Login
          </Box>
        </Grid>
      </BackSidebox>
      <Stack
        position="absolute"
        left="17%"
        sx={{
          "@media(max-width: 1200px)": {
            position: "relative",
            left: 0,
          },
        }}
      >
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
          <SignUp />
          <Login onLogin={onLogin} />
        </ReactCardFlip>
      </Stack>
    </Background>
  );
};

export default LoginSignUp;
