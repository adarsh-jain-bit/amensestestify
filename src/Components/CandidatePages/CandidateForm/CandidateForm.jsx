import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import SignUp from "./SignUp";
import { useTheme } from "styled-components";
import PersonalDetails from "./PersonalDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import { useSelector, useDispatch } from "react-redux";
import { updateField, updateError } from "../../ReduxSlice/CandidateDataSlice";
const StepsLabel = ["Sign Up", "Personal Detail", "Professional Info"];

export default function CandidateForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const data = useSelector((state) => state.CandidateData);
  console.log(data);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 1) {
      const validationFields = [
        "email",
        "name",
        "mobileNo",
        "birthDate",
        "address",
      ];
      let hasErrors = false;

      validationFields.forEach((fieldName) => {
        if (!data[fieldName]) {
          validateField(fieldName, "");
          hasErrors = true;
        }
      });
      if (hasErrors) {
        return;
      }
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        if (!value) {
          dispatch(
            updateError({ field: fieldName, value: "name is required" })
          );
        } else {
          dispatch(updateError({ field: fieldName, value: "" }));
        }
        break;
      case "email":
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(value)) {
          dispatch(
            updateError({ field: fieldName, value: "Invalid email format" })
          );
        } else {
          dispatch(updateError({ field: fieldName, value: "" }));
        }
        break;
      case "mobileNo":
        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(value)) {
          dispatch(
            updateError({
              field: fieldName,
              value: "Invalid mobile number format",
            })
          );
        } else {
          dispatch(updateError({ field: fieldName, value: "" }));
        }
        break;
      case "birthDate":
        if (!value) {
          dispatch(
            updateError({ field: fieldName, value: "birthDate is required" })
          );
        } else {
          dispatch(updateError({ field: fieldName, value: "" }));
        }
        break;
      case "address":
        if (!value) {
          dispatch(
            updateError({ field: fieldName, value: "Address is required" })
          );
        } else {
          dispatch(updateError({ field: fieldName, value: "" }));
        }
        break;

      case "collegeName":
        if (value.trim() === "") {
          dispatch(
            updateError({ field: fieldName, value: "College Name is required" })
          );
        } else {
          dispatch(updateError({ field: fieldName, value: "" }));
        }
        break;
      case "skills":
        if (value.length <= 0) {
          console.log("come");
          dispatch(
            updateError({ field: fieldName, value: "skills is required" })
          );
        } else {
          console.log("come2");
          dispatch(updateError({ field: fieldName, value: "" }));
        }
        break;
      case "collegeScore":
        if (isNaN(value) || value < 0 || value > 10 || value == "") {
          dispatch(
            updateError({
              field: fieldName,
              value: "College AGPA should be a number between 0 and 10",
            })
          );
        } else {
          dispatch(updateError({ field: fieldName, value: "" }));
        }
        break;
      case "degree":
        if (value === "") {
          dispatch(
            updateError({ field: fieldName, value: "Degree is required" })
          );
        } else {
          dispatch(updateError({ field: fieldName, value: "" }));
        }
      default:
        break;
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleFinish = () => {
    const validationField = [
      "collegeName",
      "degree",
      "collegeScore",
      "skills",
      "resume",
    ];
    let hasErrors = false;

    validationField.forEach((fieldName) => {
      if (!data[fieldName]) {
        validateField(fieldName, "");
        hasErrors = true;
      }
    });
    if (hasErrors) {
      return;
    }
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {StepsLabel.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === StepsLabel.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All StepsLabel completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleReset}
                sx={{ color: theme.palette.primary.main }}
              >
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && <SignUp />}
            {activeStep === 1 && (
              <PersonalDetails validateField={validateField} />
            )}
            {activeStep === 2 && (
              <ProfessionalDetails validateField={validateField} />
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                width: "75%",
                margin: "auto",
              }}
            >
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep !== StepsLabel.length - 1 ? (
                <Button onClick={handleNext}>Next</Button>
              ) : (
                <Button onClick={handleFinish}>Finish</Button>
              )}
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Container>
  );
}
