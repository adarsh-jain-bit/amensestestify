import React from "react";

import { Stack, Typography, Box, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import StepperStep from "./StepperStep";

function NewAssessment() {
  const theme = useTheme();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Container>
        <Box sx={{ minHeight: "91vh" }}>
          <Stack direction="row">
            <Typography variant="h5" fontWeight="bold" mt={5}>
              {onlySmallScreen ? "" : "Create new Assessment"}
            </Typography>
          </Stack>

          <StepperStep />
        </Box>
      </Container>
    </div>
  );
}

export default NewAssessment;
