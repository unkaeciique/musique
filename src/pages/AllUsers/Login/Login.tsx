import React, { useState } from "react";
import "./Login.scss";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

const Login = () => {
  const [type, setType] = useState("signIn");
  const handleOnClick = (text: any) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    "container " + (type === "signUp" ? "right-panel-active" : "");
  return (
    <div className="body">
      <div className={containerClass} id="container">
        <RegisterForm />
        <LoginForm />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome back friend</h1>
              <p>If you already have an account, login here and have fun</p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick("signIn")}
              >
                <BsArrowLeftShort /> Login
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Join in with others now</h1>
              <p>If you don't have an account yet, create one now</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick("signUp")}
              >
                Register <BsArrowRightShort />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
