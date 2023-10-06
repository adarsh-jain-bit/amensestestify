import React, { useState } from "react";
import Input from "../../Common/Input";
import styled from "@emotion/styled";
import { Typography, Grid, Stack } from "@mui/material";
import CustomDropDown from "../../Common/CustomDropDown";
import FileUpload from "./FileUpload.jsx/FileUpload";
import SkillDropDown from "../CandidateForm/SkillDropDown";

const LoginForm = styled("div")({
  height: "fit-content",
  width: "33rem",
  zIndex: 2,
  borderRadius: "5px",
  margin: "auto",
});

const ProfessionalDetails = () => {
  return (
    <LoginForm>
      <Grid sx={{ p: 4 }}>
        <Typography variant="h4" color="black" textAlign="center" mt={3}>
          Education Details
        </Typography>
        <Stack gap={3} my={1} mt={3} direction="row">
          <Input
            placeholder="College Name"
            type="text"
            color="black"
            variant="outlined"
            size="small"
          />
        </Stack>
        <Stack gap={3} my={1} mt={3} direction="row">
          <CustomDropDown />
          <Input
            placeholder="College AGPA"
            type="number"
            color="black"
            variant="outlined"
            size="small"
          />
        </Stack>
        <SkillDropDown />
        <FileUpload />
      </Grid>
    </LoginForm>
  );
};

export default ProfessionalDetails;
