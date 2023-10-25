import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
function AssessmentStage1st() {
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
            id="fullWidth"
            label="Name of Assessment"
            sx={{ backgroundColor: "white" }}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            fullWidth
            options={languages}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Language of Assessment"
                sx={{ backgroundColor: "white" }}
              />
            )}
          />
          <Autocomplete
            disablePortal
            fullWidth
            id="combo-box-demo"
            options={jobRoles}
            renderInput={(params) => (
              <TextField
                {...params}
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
