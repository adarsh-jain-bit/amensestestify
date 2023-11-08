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
import { LoginFormLoginPage, LoginButton } from "../Common/GlobalWrapper";
import { submitLogin } from "../ReduxSlice/LoginSlice";
const Login = ({ onLogin }) => {
  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });

  const Login = ({ onLogin }) => {
    const [logIn, setLogIn] = useState({
      email: "",
      password: "",
      error: {
        email: "",
        password: "",
      },
    });

    const [errors, setErrors] = useState({});

    const [showPassword, setShowPassword] = useState(false);
    const [flip, setFlip] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleSignUpChange = (e) => {
      const { name, value } = e.target;

      setSignUp((prevSignUp) => ({
        ...prevSignUp,
        [name]: value,
      }));
    };

    const handleLogInChange = (e) => {
      const { name, value } = e.target;
      setLogIn((prevLogIn) => ({
        ...prevLogIn,
        [name]: value,
      }));
    };

    const dispatch = useDispatch();

    const validateForm = () => {
      const newErrors = {};
      let isValid = true;

      if (!signUp.name) {
        newErrors.name = "Name is required";
        isValid = false;
      }
      if (!signUp.email) {
        newErrors.email = "Email is required";
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(signUp.email)) {
        newErrors.email = "Invalid email address";
        isValid = false;
      }
      if (!signUp.password) {
        newErrors.password = "Password is required";
        isValid = false;
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          signUp.password
        )
      ) {
        newErrors.password =
          "Password must be at least 8 characters, and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };

    const handleSignUp = async (e) => {
      e.preventDefault();
      if (validateForm()) {
        const formData = {
          ...signUp,
          assessment_id: [],
        };
        dispatch(submitSignUp(formData));
        toast.success("sign up Sucess", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        console.log("Form data:", signUp, "is send sucessfully");
      } else {
        toast.error("Error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        console.log("Form has errors");
      }
    };

    return (
      password.length >= minLength && containsLetter && containsNumber
      // Add more conditions as needed
    );
  };
  const handleLoginValidation = (fieldName, value) => {
    switch (fieldName) {
      case "email":
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(value)) {
          setLogIn((prevData) => ({
            ...prevData,
            error: {
              ...prevData.error,
              email: "invalid email",
            },
          }));
        } else {
          setLogIn((prevData) => ({
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
          setLogIn((prevData) => ({
            ...prevData,
            error: {
              ...prevData.error,
              password: "Invalid password",
            },
          }));
        } else {
          setLogIn((prevData) => ({
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
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = logIn;

    // Validate the fields
    handleLoginValidation("email", email);
    handleLoginValidation("password", password);
    console.log(logIn);
    // Check if there are any errors in the signUp state
    if (!logIn.error.name && !logIn.error.email && !logIn.error.password) {
      const formData = {
        email: logIn.email,
        password: logIn.password,
        assessment_id: [],
      };

      // Dispatch the action to submit the signUp data
      dispatch(submitLogin(formData));
    }
  };
  return (
    <LoginFormLoginPage>
      <Grid sx={{ p: 4 }}>
        <Typography variant="h4" color="white">
          Login
        </Typography>
        <Stack gap={3} my={1}>
          <Input
            placeholder="Email"
            type="email"
            color="white"
            name="email"
            value={logIn.email}
            onChange={handleLogInChange}
            onValidate={handleLoginValidation}
            error={Boolean(logIn.error.email)}
            helperText={logIn.error.email}
          />
          <Input
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            handleClickShowPassword={handleClickShowPassword}
            showPassword={showPassword}
            color="white"
            name="password"
            value={logIn.password}
            onChange={handleLogInChange}
            onValidate={handleLoginValidation}
            error={Boolean(logIn.error.password)}
            helperText={logIn.error.password}
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
        <LoginButton onClick={handleLogin}>login</LoginButton>
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
            sign In
          </Typography>
        </Typography>
      </Grid>
    </LoginFormLoginPage>
  );
};

export default Login;
