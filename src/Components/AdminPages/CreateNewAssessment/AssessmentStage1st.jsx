import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
function AssessmentStage1st({ onFieldChange, validate }) {
  const { assessmentName, language, jobRole, error } = useSelector(
    (state) => state.newAssessmentField
  );
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { my: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack alignItems="center">
          <TextField
            fullWidth
            required
            error={error.assessmentName}
            id="fullWidth"
            label="Name of Assessment"
            sx={{ backgroundColor: "white" }}
            value={assessmentName}
            onChange={(e) => {
              onFieldChange("assessmentName", e.target.value);
            }}
            onBlur={() => validate("assessmentName")}
            helperText={error.assessmentName}
          />
          <Autocomplete
            disablePortal
            id="language-combo-box"
            fullWidth
            options={languages}
            value={language}
            onChange={(_, newValue) => {
              onFieldChange("language", newValue);
            }}
            onBlur={() => validate("language")}
            renderInput={(params) => (
              <TextField
                error={error.language}
                helperText={error.language}
                {...params}
                label="Language of Assessment"
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
          <Autocomplete
            disablePortal
            fullWidth
            id="jobRole-combo-box"
            options={jobRoles}
            value={jobRole}
            onChange={(_, newValue) => {
              onFieldChange("jobRole", newValue);
            }}
            onBlur={() => validate("jobRole")}
            renderInput={(params) => (
              <TextField
                {...params}
                error={error.jobRole}
                helperText={error.jobRole}
                label="Job Roles"
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
        </Stack>
      </Box>
    </div>
  );
}

export default AssessmentStage1st;
const languages = ["English", "Hindi", "Turkey", "Spanish"];
const jobRoles = [
  "Frontend Developer",
  "Backend Developer",
  "FullStack Developer",
  "Java Developer",
];
