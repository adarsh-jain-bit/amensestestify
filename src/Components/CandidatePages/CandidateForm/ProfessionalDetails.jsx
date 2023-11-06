import React from "react";
import Input from "../../Common/Input";
import { Typography, Grid, Stack } from "@mui/material";
import CustomDropDown from "../../Common/CustomDropDown";
import FileUpload from "./FileUpload.jsx/FileUpload";
import SkillDropDown from "../CandidateForm/SkillDropDown";
import { LoginForm } from "../../Common/GlobalWrapper";
import { updateField, updateError } from "../../ReduxSlice/CandidateDataSlice";
import { useSelector, useDispatch } from "react-redux";
const ProfessionalDetails = ({ validateField }) => {
  const Degree = ["Btech", "MCA", "BSc", "BCA"];
  const dispatch = useDispatch();
  const { collegeName, collegeScore, error } = useSelector(
    (state) => state.CandidateData
  );
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    if (name == "collegeScore") {
      dispatch(updateField({ field: name, value: parseInt(value) }));
    } else {
      dispatch(updateField({ field: name, value: value }));
    }
  };

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
            width="500px"
            name="collegeName"
            onChange={handleFieldChange}
            value={collegeName}
            error={error.collegeName}
            helperText={error.collegeName}
            onValidate={validateField}
          />
        </Stack>
        <Stack gap={3} my={1} mt={3} direction="row">
          <CustomDropDown
            label="degree"
            data={Degree}
            validateField={validateField}
          />
          <Input
            placeholder="College AGPA"
            type="number"
            color="black"
            variant="outlined"
            size="small"
            name="collegeScore"
            value={collegeScore}
            onChange={handleFieldChange}
            onValidate={validateField}
            error={error.collegeScore}
            helperText={error.collegeScore}
          />
        </Stack>
        <SkillDropDown validateField={validateField} />
        <FileUpload />
      </Grid>
    </LoginForm>
  );
};

export default ProfessionalDetails;
