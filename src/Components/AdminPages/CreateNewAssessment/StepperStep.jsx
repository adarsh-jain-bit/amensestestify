import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Stack from "@mui/material/Stack";
import AssessmentStage1st from "./AssessmentStage1st";
import AssessmentStage3rd from "./AssessmentStage3rd";
import AssessmentStage2nd from "./AssessmentStage2nd";
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  updateError,
  clearFields,
} from "../../ReduxSlice/NewAssessmentFieldData";
const steps = ["Name assessment", "Select tests", "Review and configure"];

function StepperStep() {
  const dispatch = useDispatch();
  const AssessmentData = useSelector((state) => state.newAssessmentField);
  console.log(AssessmentData);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [fields, setFields] = useState({
    assessmentName: "",
    language: null,
    jobRole: null,
    move: false,
    error: {
      assessmentName: "",
      language: null,
      jobRole: null,
    },
  });

  const handleFieldChange = (field, value) => {
    setFields((prevFields) => ({
      ...prevFields,
      [field]: value,
    }));
    dispatch(updateField({ field, value }));
  };
  const validate = (field) => {
    if (field === "assessmentName") {
      if (fields.assessmentName.trim() === "") {
        // Check the value in fields
        setFields((prevFields) => ({
          ...prevFields,
          move: false,
          error: {
            ...prevFields.error,
            assessmentName: "Please provide a valid assessment name.",
          },
        }));
      } else {
        setFields((prevFields) => ({
          ...prevFields,
          move: false,
          error: {
            ...prevFields.error,
            assessmentName: "",
          },
        }));
      }
    } else if (field === "language") {
      if (!fields.language) {
        setFields((prevFields) => ({
          ...prevFields,
          move: false,
          error: {
            ...prevFields.error,
            language: "Please select the language.",
          },
        }));
      } else {
        setFields((prevFields) => ({
          ...prevFields,
          move: false,
          error: {
            ...prevFields.error,
            language: null,
          },
        }));
      }
    } else if (field === "jobRole") {
      if (!fields.jobRole) {
        setFields((prevFields) => ({
          ...prevFields,
          move: false,
          error: {
            ...prevFields.error,
            jobRole: "Please select a valid job role.",
          },
        }));
      } else {
        setFields((prevFields) => ({
          ...prevFields,
          move: false,
          error: {
            ...prevFields.error,
            jobRole: null,
          },
        }));
      }
    }
  };

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
    return completedSteps() === totalSteps;
  };

  const handleNext = () => {
    if (
      fields.assessmentName.trim() == "" ||
      fields.jobRole === null ||
      fields.language === null
    ) {
      validate("assessmentName");
      validate("language");
      validate("jobRole");
    } else {
      const newActiveStep =
        isLastStep() && !allStepsCompleted()
          ? steps.findIndex((step, i) => !(i in completed))
          : activeStep + 1;

      setActiveStep(newActiveStep);
    }
  };
  // console.log(fields);
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => {
    setActiveStep(step);
  };

  const handleReset = () => {
    dispatch(clearFields());
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ minHeight: "91vh", position: "relative" }}>
      <Box sx={{ position: "absolute", right: 0, top: "-85px" }}>
        <Stack direction="row" justifyContent="flex-end" gap={3}>
          {activeStep !== 0 && (
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
              <ArrowBackIosIcon />
            </Button>
          )}
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
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Stepper
        activeStep={activeStep}
        nonLinear={fields.move}
        alternativeLabel
        sx={{ mb: 5, mt: 5 }}
      >
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton onClick={() => handleStep(index)}>{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: "2%", mb: 10 }}>
              All steps completed - you're finished
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
              {activeStep === 0 && (
                <AssessmentStage1st
                  fields={fields}
                  onFieldChange={handleFieldChange}
                  validate={validate}
                />
              )}
              {activeStep === 1 && <AssessmentStage2nd />}
              {activeStep === 2 && <AssessmentStage3rd />}
            </Typography>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}

export default StepperStep;
