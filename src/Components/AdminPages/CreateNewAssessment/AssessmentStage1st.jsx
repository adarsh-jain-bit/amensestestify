import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

function AssessmentStage1st({ fields, onFieldChange, validate }) {
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
            error={fields.error.assessmentName}
            id="fullWidth"
            label="Name of Assessment"
            sx={{ backgroundColor: "white" }}
            value={fields.assessmentName}
            onChange={(e) => {
              onFieldChange("assessmentName", e.target.value);
            }}
            onBlur={() => validate("assessmentName")}
            helperText={fields.error.assessmentName}
          />
          <Autocomplete
            disablePortal
            id="language-combo-box"
            fullWidth
            options={languages}
            value={fields.language}
            onChange={(_, newValue) => {
              // console.log(_, newValue);
              onFieldChange("language", newValue);
            }}
            onBlur={() => validate("language")}
            renderInput={(params) => (
              <TextField
                error={fields.error.language}
                helperText={fields.error.language}
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
            value={fields.jobRole}
            onChange={(_, newValue) => {
              onFieldChange("jobRole", newValue);
            }}
            onBlur={() => validate("jobRole")}
            renderInput={(params) => (
              <TextField
                {...params}
                error={fields.error.jobRole}
                helperText={fields.error.jobRole}
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
