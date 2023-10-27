import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";

function AssessmentStage1st({ fields, onFieldChange }) {
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
            error={fields.assessmentName.trim() === ""}
            id="fullWidth"
            label="Name of Assessment"
            sx={{ backgroundColor: "white" }}
            value={fields.assessmentName}
            onChange={(e) => onFieldChange("assessmentName", e.target.value)}
            helperText={
              fields.assessmentName.trim() === ""
                ? fields.error.assessmentName
                : ""
            }
          />
          <Autocomplete
            disablePortal
            id="language-combo-box"
            fullWidth
            options={languages}
            value={fields.language}
            onChange={(_, newValue) => onFieldChange("language", newValue)}
            renderInput={(params) => (
              <TextField
                error={!fields.language}
                {...params}
                label="Language of Assessment"
                sx={{ backgroundColor: "white" }}
                helperText={!fields.language ? fields.error.language : ""}
              />
            )}
          />
          <Autocomplete
            disablePortal
            fullWidth
            id="jobRole-combo-box"
            options={jobRoles}
            value={fields.jobRole}
            onChange={(_, newValue) => onFieldChange("jobRole", newValue)}
            renderInput={(params) => (
              <TextField
                error={!fields.jobRole}
                {...params}
                label="Job Roles"
                sx={{ backgroundColor: "white" }}
                helperText={!fields.jobRole ? fields.error.jobRole : ""}
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
