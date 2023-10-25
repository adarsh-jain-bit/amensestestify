import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import AssessmentStage1st from "./AssessmentStage1st";
import AssessmentStage3rd from "./AssessmentStage3rd";
import AssessmentStage2nd from "./AssessmentStage2nd";
const steps = ["Name assessment", "Select tests", "review and configure"];

function StepperStep() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ minHeight: "91vh" }}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        alternativeLabel
        sx={{ mb: 5, mt: 5 }}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="#5C5470" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: "2%", mb: 10 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 3 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleReset}
                sx={{
                  color: "white",
                  bgcolor: "#5C5470",
                  "&:hover": { bgcolor: "#5C5470" },
                }}
              >
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 5, py: "1%" }}>
              {activeStep === 0 && <AssessmentStage1st />}
              {activeStep === 1 && <AssessmentStage2nd />}
              {activeStep === 2 && <AssessmentStage3rd />}
            </Typography>
            <Box sx={{ pt: "2%", pb: "2%" }}>
              <Stack direction="row" justifyContent="space-between">
                <Button
                  variant="contained"
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{
                    color: "white",
                    bgcolor: "#5C5470",
                    "&:hover": { bgcolor: "#5C5470" },
                  }}
                >
                  Back
                </Button>
                <Box>
                  <Stack direction="row" spacing={3}>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{
                        bgcolor: "#5C5470",
                        "&:hover": { bgcolor: "#5C5470" },
                      }}
                    >
                      Next
                    </Button>
                    {activeStep !== steps.length &&
                      (completed[activeStep] ? (
                        <Typography
                          variant="caption"
                          sx={{ display: "inline-block" }}
                        >
                          Step {activeStep + 1} already completed
                        </Typography>
                      ) : (
                        <Button
                          variant="contained"
                          onClick={handleComplete}
                          sx={{
                            bgcolor: "#5C5470",
                            "&:hover": { bgcolor: "#5C5470" },
                          }}
                        >
                          {completedSteps() === totalSteps() - 1
                            ? "Finish"
                            : "Complete Step"}
                        </Button>
                      ))}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}

export default StepperStep;
