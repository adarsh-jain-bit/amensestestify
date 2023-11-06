import React, { useState } from "react";
import Input from "../../Common/Input";
import { Typography, Grid, Stack } from "@mui/material";
import { LoginForm } from "../../Common/GlobalWrapper";
import { useSelector, useDispatch } from "react-redux";
import { updateField, updateError } from "../../ReduxSlice/CandidateDataSlice";

const PersonalDetails = ({ validateField }) => {
  const { email, name, mobileNo, birthDate, address, error } = useSelector(
    (state) => state.CandidateData
  );
  const dispatch = useDispatch();
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    if (name === "fName" || name === "lName") {
      setFullName((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      if (name === "mobileNo") {
        dispatch(updateField({ field: name, value: parseInt(value) }));
      } else {
        dispatch(updateField({ field: name, value: value }));
      }
    }
    if (fullName.fName && fullName.lName) {
      const fullNameValue = `${fullName.fName} ${fullName.lName}`;
      dispatch(updateField({ field: "name", value: fullNameValue }));
    }
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
            name="fName"
            onChange={handleFieldChange}
            value={fullName.fName}
            onValidate={validateField}
          />
          <Input
            placeholder="Last Name"
            type="text"
            color="black"
            variant="outlined"
            size="small"
            name="lName"
            onChange={handleFieldChange}
            value={fullName.lName}
            onValidate={validateField}
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
            onValidate={validateField}
            error={error.mobileNo}
            helperText={error.mobileNo}
          />
          <Input
            placeholder="DOB"
            type="date"
            color="black"
            variant="outlined"
            size="small"
            shrink={true}
            name="birthDate"
            onChange={handleFieldChange}
            value={birthDate}
            error={error.birthDate}
            helperText={error.birthDate}
            onValidate={validateField}
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
            onValidate={validateField}
            error={error.email}
            helperText={error.email}
          />
          <Input
            placeholder="Address"
            type="text"
            color="black"
            variant="outlined"
            rows={6}
            multiline
            name="address"
            onChange={handleFieldChange}
            value={address}
            onValidate={validateField}
            error={error.address}
            helperText={error.address}
          />
        </Stack>
      </Grid>
    </LoginForm>
  );
};

export default PersonalDetails;
