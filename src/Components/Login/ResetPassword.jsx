import {
  Avatar,
  Container,
  Paper,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { styled } from "@mui/system";
import React from "react";
import resetPassword from "../../Assets/LoginImg/resetpassword.avif";
const LoginButton = styled("button")({
  position: "relative",
  height: "38px",
  width: "100%",
  margin: "20px auto",
  display: "block",
  letterSpacing: "1px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  boxShadow: "1px 1px 5px #636e72",
  cursor: "pointer",
  transition: "0.6s",
  color: "#FFFFFF",
  background: "#7d5ce9",
  zIndex: 2,
});
const ResetPassword = () => {
  return (
    <>
      <Stack
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100vh"
        sx={{ background: "linear-gradient(to top, #7d5ce9,#684bc8)" }}
      >
        <Paper elevation={2}>
          <Stack height="25rem" width="30rem">
            <Avatar
              alt="Remy Sharp"
              src={resetPassword}
              sx={{
                height: "120px",
                width: "120px",
                display: "block",
                margin: " 10px auto",
              }}
            />
            <Stack width="100%" alignItems="center" px={6}>
              <Typography variant="h6" fontWeight="bold">
                Forgot Password
              </Typography>
              <Typography
                fontSize="14px"
                variant="body"
                textAlign="center"
                color="gray"
                mb={2}
              >
                Enter your email and well will send you a link to reset your
                password.
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
              />
              <LoginButton>submit</LoginButton>
              <Typography
                alignItems="center"
                display="flex"
                color="gray"
                fontSize="14px"
              >
                <KeyboardArrowLeftIcon /> Back to Login
              </Typography>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </>
  );
};

export default ResetPassword;
