import React, { useState } from "react";
import Input from "../Common/Input";

import {
  Stack,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { submitSignUp } from "../ReduxSlice/ApiSlice";
import { LoginFormLoginPage, LoginButton } from "../Common/GlobalWrapper";

const SignUp = () => {
  const [flip, setFlip] = useState(false);
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    error: {
      name: "",
      email: "",
      password: "",
    },
  });
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { name, email, password } = signUp;

    // Validate the fields
    handleSignUpValidation("name", name);
    handleSignUpValidation("email", email);
    handleSignUpValidation("password", password);

    // Check if there are any errors in the signUp state
    if (!signUp.error.name && !signUp.error.email && !signUp.error.password) {
      const formData = {
        ...signUp,
        assessment_id: [],
      };

      // Dispatch the action to submit the signUp data
      dispatch(submitSignUp(formData));
    }
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUp((prevSignUp) => ({
      ...prevSignUp,
      [name]: value,
    }));
  };

  const isPasswordValid = (password) => {
    // Define your password validation criteria here
    const minLength = 8;
    const containsLetter = /[a-zA-Z]/.test(password);
    const containsNumber = /\d/.test(password);
    // You can add more criteria as needed

    return (
      password.length >= minLength && containsLetter && containsNumber
      // Add more conditions as needed
    );
  };

  const handleSignUpValidation = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        if (!value) {
          setSignUp((prevData) => ({
            ...prevData,
            error: {
              ...prevData.error,
              name: "name is required",
            },
          }));
        } else {
          setSignUp((prevData) => ({
            ...prevData,
            error: {
              ...prevData.error,
              name: "",
            },
          }));
        }
        break;
      case "email":
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(value)) {
          setSignUp((prevData) => ({
            ...prevData,
            error: {
              ...prevData.error,
              email: "invalid email",
            },
          }));
        } else {
          setSignUp((prevData) => ({
            ...prevData,
            error: {
              ...prevData.error,
              email: "",
            },
          }));
        }
        break;
      case "password":
        if (!isPasswordValid(value)) {
          setSignUp((prevData) => ({
            ...prevData,
            error: {
              ...prevData.error,
              password: "Invalid password",
            },
          }));
        } else {
          setSignUp((prevData) => ({
            ...prevData,
            error: {
              ...prevData.error,
              password: "",
            },
          }));
        }
        break;
      default:
        break;
    }
  };
  return (
    <LoginFormLoginPage>
      <Grid sx={{ p: 4 }}>
        <Typography variant="h4" color="white">
          SIGN UP
        </Typography>
        <Stack gap={2} my={1}>
          <Input
            placeholder="Name"
            type="text"
            color="white"
            name="name"
            value={signUp.name}
            onChange={handleSignUpChange}
            onValidate={handleSignUpValidation}
            error={Boolean(signUp.error.name)}
            helperText={signUp.error.name}
          />
          <Input
            placeholder="Email"
            type="email"
            color="white"
            name="email"
            value={signUp.email}
            onChange={handleSignUpChange}
            onValidate={handleSignUpValidation}
            error={Boolean(signUp.error.email)}
            helperText={signUp.error.email}
          />
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            handleClickShowPassword={handleClickShowPassword}
            showPassword={showPassword}
            color="white"
            name="password"
            value={signUp.password}
            onChange={handleSignUpChange}
            onValidate={handleSignUpValidation}
            error={Boolean(signUp.error.password)}
            helperText={signUp.error.password}
          />

          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                style={{
                  color: "white",
                }}
              />
            }
            label="Remember me?"
            sx={{
              color: "white",
            }}
          />
        </Stack>
        <LoginButton onClick={handleSignUp}>sign up</LoginButton>
        <Typography
          variant="p"
          display="flex"
          justifyContent="flex-end"
          color="white"
        >
          Forgot Password?
        </Typography>
        <Typography
          color="white"
          fontSize={15}
          mt={2}
          textAlign="center"
          display="none"
          sx={{
            "@media(max-width: 1200px)": {
              display: "block",
            },
          }}
        >
          Already Have an Account?
          <Typography
            component="span"
            color="white"
            fontWeight="bold"
            fontSize={15}
            marginLeft={1}
            onClick={() => setFlip(!flip)}
          >
            Log in
          </Typography>
        </Typography>
      </Grid>
    </LoginFormLoginPage>
  );
};

export default SignUp;
