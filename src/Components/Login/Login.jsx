import React, { useState } from "react";
import Input from "../Common/Input";
import backGroundImg from "../../Assets/LoginImg/LoginBackground.jpg";
import {
  Stack,
  Typography,
  Grid,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import ReactCardFlip from "react-card-flip";
import { useDispatch } from "react-redux";
import { submitSignUp } from "../ReduxSlice/ApiSlice";

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
const Login = () => {
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [logIn, setLogIn] = useState({
    email: "",
    password: "",
  });
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = {
      ...signUp,
      assessment_id: [],
    };
    dispatch(submitSignUp(formData));
    console.log("data send");
  };

  return (
    <Background>
      <BackSidebox>
        <Grid width="50%" />
        <Grid mt={10} p={4} width="50%">
          <Typography variant="h5">
            Have an
            <Typography
              color="#7d5ce9"
              marginLeft="5px"
              variant="h5"
              component="span"
            >
              Account?
            </Typography>
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
            labore!
          </Typography>
          <LoginButton
            variant="outline"
            sx={{
              border: "1px solid black",
              boxShadow: "none",
              margin: "10px 0px",
              background: "white",
              width: "90px",
              "&:hover": {
                border: "1px solid green",
              },
            }}
            onClick={() => setFlip(!flip)}
          >
            Login
          </LoginButton>
        </Grid>
      </BackSidebox>
      <Stack
        position="absolute"
        left="17%"
        sx={{
          "@media(max-width: 1200px)": {
            position: "relative",
            left: 0,
          },
        }}
      >
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
          <LoginForm>
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
                />
                <Input
                  placeholder="Email"
                  type="email"
                  color="white"
                  name="email"
                  value={signUp.email}
                  onChange={handleSignUpChange}
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
          </LoginForm>
          <LoginForm>
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
              <LoginButton>login</LoginButton>
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
          </LoginForm>
        </ReactCardFlip>
      </Stack>
    </Background>
  );
};

export default Login;
