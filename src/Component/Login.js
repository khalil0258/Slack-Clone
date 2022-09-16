import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { Button } from "@mui/material";
function Login() {
  const signUp =async (e) => {
    e.preventDefault();
  await    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log("hello");
        // localStorage.setItem("login", true);
        // setLogin(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt=""
        />
        <h1>Sing in to the Slack Community</h1>
        <p>khalil.Slack.com</p>
        <Button onClick={signUp}>Sing in with Google </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
