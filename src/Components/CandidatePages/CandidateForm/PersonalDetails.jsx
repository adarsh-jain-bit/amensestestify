import React, { useState } from "react";
import Input from "../../Common/Input";
import { Typography, Grid, Stack } from "@mui/material";
import { LoginForm } from "../../Common/GlobalWrapper";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../../ReduxSlice/CandidateDataSlice";
const PersonalDetails = () => {
  const { email, name, mobileNo, DOB, Address, error } = useSelector(
    (state) => state.CandidateData
  );
  const dispatch = useDispatch();
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value: value }));
  };

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
            name="name"
            onChange={handleFieldChange}
            value={name}
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
            name="mobileNo"
            onChange={handleFieldChange}
            value={mobileNo}
          />
          <Input
            placeholder="DOB"
            type="date"
            color="black"
            variant="outlined"
            size="small"
            shrink={true}
            name="DOB"
            onChange={handleFieldChange}
            value={DOB}
          />
        </Stack>
        <Stack gap={3} mt={3}>
          <Input
            placeholder="Email"
            type="email"
            color="black"
            variant="outlined"
            size="small"
            name="email"
            onChange={handleFieldChange}
            value={email}
          />
          <Input
            placeholder="Address"
            type="text"
            color="black"
            variant="outlined"
            rows={6}
            multiline
            name="Address"
            onChange={handleFieldChange}
            value={Address}
          />
        </Stack>
      </Grid>
    </LoginForm>
  );
};

export default PersonalDetails;
