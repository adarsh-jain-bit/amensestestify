import React, { useState } from "react";
import Input from "../../Common/Input";
import styled from "@emotion/styled";
import {
  Typography,
  Grid,
  Stack,
  TextField,
  OutlinedInput,
} from "@mui/material";
const LoginForm = styled("div")({
  height: "400px",
  width: "33rem",
  zIndex: 2,
  borderRadius: "5px",
  margin: "auto",
});
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <LoginForm>
      <Grid sx={{ p: 4 }}>
        <Typography variant="h4" color="black" textAlign="center" mt={3}>
          Sign Up
        </Typography>
        <Stack gap={3} my={1} mt={3}>
          <Input
            placeholder="Email"
            type="text"
            color="black"
            variant="outlined"
            size="small"
          />
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            handleClickShowPassword={handleClickShowPassword}
            showPassword={showPassword}
            color="black"
            variant="outlined"
            size="small"
          />
        </Stack>
      </Grid>
    </LoginForm>
  );
};

export default SignUp;
