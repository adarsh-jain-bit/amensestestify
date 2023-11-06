import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
// import { makeStyles } from "@mui/styles";
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
  makeApiCall,
} from "../../ReduxSlice/NewAssessmentFieldData";
const steps = ["Name assessment", "Select tests", "Review and configure"];

function StepperStep() {
  const dispatch = useDispatch();
  const { assessmentName, language, jobRole, move, error } = useSelector(
    (state) => state.newAssessmentField
  );
  const data = useSelector((state) => state.newAssessmentField);

  console.log(data);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  // const useStyles = makeStyles(() => ({
  //   root: {
  //     "& .MuiStepIcon-active": { color: "red" },
  //     "& .MuiStepIcon-completed": { color: "green" },
  //     "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" },
  //   },
  // }));

  // const c = useStyles();

  const handleFieldChange = (field, value) => {
    dispatch(updateField({ field, value }));
  };
  const validate = (field) => {
    if (
      error.jobRole === "" &&
      error.language === "" &&
      error.assessmentName === ""
    ) {
      if (field === "assessmentName") {
        if (assessmentName.trim() === "") {
          dispatch(
            updateError({
              field,
              value: "Please provide a valid assessment name.",
            })
          );
        } else {
          dispatch(updateError({ field, value: "" }));
        }
      } else if (field === "language") {
        if (!language) {
          dispatch(
            updateError({ field, value: "Please select the language." })
          );
        } else {
          dispatch(updateError({ field, value: "" }));
        }
      } else if (field === "jobRole") {
        if (!jobRole) {
          dispatch(
            updateError({ field, value: "Please select a valid job role." })
          );
        } else {
          dispatch(updateError({ field, value: "" }));
        }
      }
    } else {
      handleMove();
    }
  };
  const handleMove = () => {
    console.log("handle in handlemove");
    dispatch(updateField({ field: "move", value: true }));
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
    if (assessmentName.trim() === "" || jobRole === null || language === null) {
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

  const handleFinish = async () => {
    console.log(assessmentName, jobRole);
    const assessmentData = {
      organisation_id: "653f503e64f189e30667b7cc",
      name: assessmentName,
      tech_stack: jobRole,
      test_level: "easy",
      question_id: [],
    };

    try {
      const response = await dispatch(makeApiCall(assessmentData));
      console.log("API response:", response);
    } catch (error) {
      console.error("API call error:", error);
    }

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
                {activeStep === 2 ? "Finish" : "Next"}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Stepper
        activeStep={activeStep}
        nonLinear={move}
        alternativeLabel
        sx={{ mb: 5, mt: 5 }}
        // className={c.root}
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
