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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Background = styled("div")({
  height: "100vh",
  display: "flex",
  alignItems: " center",
  justifyContent: "center",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",
  backgroundImage: `  linear-gradient(
    rgba(0, 0, 0, 0.6), 
    rgba(0, 0, 0, 0.6)
  ), url(${backGroundImg})`,
});
const LoginForm = styled("div")({
  backgroundColor: "#7d5ce9",
  height: "27.5rem",
  width: "21.8rem",
  zIndex: 2,
  borderRadius: "5px",
});

const BackSidebox = styled("div")({
  backgroundColor: "white",
  width: "60%",
  height: "22rem",
  position: "absolute",
  borderRadius: "5px",
  display: "flex",
  left: "15%",
  "@media(max-width: 1200px)": {
    display: "none",
  },
});

const LoginButton = styled("button")({
  position: "relative",
  height: "38px",
  width: "100%",
  margin: "5px auto",
  display: "block",
  letterSpacing: "1px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  boxShadow: "1px 1px 10px #636e72",
  cursor: "pointer",
  transition: "0.6s",
  color: "#206592",
  zIndex: 2,
});
import { LoginFormLoginPage, LoginButton } from "../Common/GlobalWrapper";
const Login = () => {
  const [signUp, setSignUp] = useState({
    name: "",
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
    const { email, password } = Login;

    // Validate the fields
    handleLoginValidation("email", email);
    handleLoginValidation("password", password);

    // Check if there are any errors in the signUp state
    if (!Login.error.name && !Login.error.email && !Login.error.password) {
      const formData = {
        ...Login,
        assessment_id: [],
      };

      // Dispatch the action to submit the signUp data
      // dispatch(submitSignUp(formData));
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
