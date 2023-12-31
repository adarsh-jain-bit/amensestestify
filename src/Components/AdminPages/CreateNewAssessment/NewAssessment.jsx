import React from "react";

import { Stack, Typography, Box, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import { useTheme } from "@mui/material/styles";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import StepperStep from "./StepperStep";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function NewAssessment() {
  const theme = useTheme();
  const Navigate = useNavigate();
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { assessmentName } = useSelector((state) => state.newAssessmentField);

  return (
    <div>
      <Container>
        <Box sx={{ minHeight: "91vh" }}>
          <Stack direction="column">
            <Stack direction="row" alignItems="center" gap={2}>
              <Box
                height="40px"
                width="40px"
                color="black"
                justifyContent="Center"
                display="flex"
                alignItems="center"
                sx={{ backgroundColor: "#EDEDED" }}
                mt={5}
                onClick={() => {
                  Navigate(-1);
                }}
              >
                <ArrowBackIosIcon />
              </Box>
              <Stack>
                <Typography variant="h5" fontWeight="bold" mt={5}>
                  {onlySmallScreen ? "New Assessment" : "Create New Assessment"}
                </Typography>
                <Box display="flex" gap={2} alignItems="center" color="#5C5470">
                  {!onlySmallScreen ? (
                    <Typography>
                      {" "}
                      {assessmentName.length > 0
                        ? assessmentName
                        : "Untitled assessment"}{" "}
                    </Typography>
                  ) : (
                    ""
                  )}
                  <Typography alignItems="center" display="flex" gap={1}>
                    <FeaturedPlayListIcon /> Tests
                  </Typography>
                  <Typography alignItems="center" display="flex" gap={1}>
                    <AccessAlarmsIcon /> 0 mins
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>

          <StepperStep />
        </Box>
      </Container>
    </div>
  );
}

export default NewAssessment;
