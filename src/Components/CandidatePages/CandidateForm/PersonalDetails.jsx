import React, { useState } from "react";
import Input from "../../Common/Input";
import styled from "@emotion/styled";
import { Typography, Grid, Stack } from "@mui/material";
const LoginForm = styled("div")({
  height: "fit-content",
  width: "33rem",
  zIndex: 2,
  borderRadius: "5px",
  margin: "auto",
});

const PersonalDetails = () => {
  return (
    <LoginForm>
      <Grid sx={{ p: 4 }}>
        <Typography variant="h4" color="black" textAlign="center" mt={3}>
          Personal Details
        </Typography>
        <Stack gap={3} my={1} mt={3} direction="row">
          <Input
            placeholder="First Name"
            type="text"
            color="black"
            variant="outlined"
            size="small"
          />
          <Input
            placeholder="Last Name"
            type="text"
            color="black"
            variant="outlined"
            size="small"
          />
        </Stack>
        <Stack gap={3} my={1} mt={3} direction="row">
          <Input
            placeholder="Mobile No."
            type="tel"
            color="black"
            variant="outlined"
            size="small"
          />
          <Input
            placeholder="DOB"
            type="date"
            color="black"
            variant="outlined"
            size="small"
            shrink="true"
          />
        </Stack>
        <Stack gap={3} mt={3}>
          <Input
            placeholder="Email"
            type="email"
            color="black"
            variant="outlined"
            size="small"
          />
          <Input
            placeholder="Address"
            type="text"
            color="black"
            variant="outlined"
            rows={6}
            multiline
          />
        </Stack>
      </Grid>
    </LoginForm>
  );
};

export default PersonalDetails;
