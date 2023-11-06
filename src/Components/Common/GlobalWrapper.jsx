import styled from "styled-components";
import backGroundImg from "../../Assets/LoginImg/LoginBackground.jpg";
export const LoginForm = styled("div")({
  height: "400px",
  width: "33rem",
  zIndex: 2,
  borderRadius: "5px",
  margin: "auto",
  overflowY: "auto",
});

export const LoginButton = styled("button")({
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

export const Background = styled("div")({
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

export const BackSidebox = styled("div")({
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
export const LoginFormLoginPage = styled("div")({
  backgroundColor: "#7d5ce9",
  height: "27.5rem",
  width: "21.8rem",
  zIndex: 2,
  borderRadius: "5px",
});
