import React from "react";

import { Stack, Typography, Box } from "@mui/material";
import Container from "@mui/material/Container";

import StepperStep from "./StepperStep";

function NewAssessment() {
  return (
    <div>
      <Container>
        <Box sx={{ minHeight: "91vh" }}>
          <Stack direction="row">
            <Typography variant="h5" fontWeight="bold" mt={5}>
              Create new assessment
            </Typography>
          </Stack>

          <StepperStep />
        </Box>
      </Container>
    </div>
  );
}

export default NewAssessment;
