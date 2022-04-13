import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import "./App.css";
import Header from "./Component/Header";
import styled from "styled-components";
import SideBar from "./Component/SideBar";
import Chat from "./Component/Chat";
import Login from "./Component/Login";
function App() {
  require("dotenv").config();
  // console.log(process.env.REACT_APP_API_KEY);
  // localStorage.clear();
  const navigation = useNavigate();
  const storage = localStorage.getItem("login");
  const [login, setLogin] = useState(null);
  useEffect(() => {
    setLogin(storage);
  }, []);
  const loginHandler = (enter) => {
    setLogin(enter);
  };
  const logOutHandler = (enter) => {
    setLogin(enter);
  };
  // console.log(login);
  return (
    <div className="app">
      {!login ? (
        <Login setLogin={loginHandler} />
      ) : (
        <>
          <Header setLogin={logOutHandler} />
          <AppBody>
            <SideBar />
            <Routes>
              <Route path="/" exact element={<Chat />}></Route>
            </Routes>
          </AppBody>
        </>
      )}
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
