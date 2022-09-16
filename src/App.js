import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import "./App.css";
import Header from "./Component/Header";
import styled from "styled-components";
import SideBar from "./Component/SideBar";
import Chat from "./Component/Chat";
import Login from "./Component/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
function App() {
  // const navigation = useNavigate();
  // const storage = localStorage.getItem("login");
  const [login, setLogin] = useState(null);
  useEffect(() => {
    // setLogin(storage);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true);
        // ...
      } else {
        setLogin(false);
      }
    });
  }, []);
  // const loginHandler = (enter) => {
  //   setLogin(enter);
  // };
  // const logOutHandler = (enter) => {
  //   setLogin(enter);
  // };
  // console.log(login);
  return (
    <div className="app">
      {!login ? (
        <Login />
      ) : (
        <>
          <Header />
          <AppBody>
            <SideBar />
            <Routes>
              <Route path="/" exact element={<Chat />} />
            </Routes>
          </AppBody>
        </>
      )}
    </div>
  );
}

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
