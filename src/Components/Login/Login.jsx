import React from "react";
import "./Login.css";
import { ReactComponent as GoogleIcon } from "../../SVG_Icon/Google.svg";
const Login = () => {
  return (
    <div className="container">
      <div className="loginBox">
        <div className="logo">logo</div>
        <p>We are glad to see you again.</p>
        <div id="googleBtn">
          <span class="label">Sign in with:</span>
          <div id="customBtn">
            <span class="icon"></span>
            <GoogleIcon />
            <span class="buttonText">Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
