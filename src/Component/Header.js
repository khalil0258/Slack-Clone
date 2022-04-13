import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
function Header({ setLogin }) {
  const logOut = () => {
    signOut(auth)
      .then((result) => {
        // console.log("siGN OUT");
        localStorage.setItem("login", false);
        setLogin(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <HeaderContainer>
      {/* Header left  */}
      <LeftHeader>
        <Avatar fontSize="large" onClick={logOut} />
        <AccessTimeIcon />
      </LeftHeader>
      {/* Header search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>
      {/* Header right */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  padding: 10px 0;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  color: white;
  background-color: var(--slack-color);
`;
const LeftHeader = styled.div`
  flex: 0.3;
  display: flex;

  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const Avatar = styled(AccountCircleIcon)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  padding: 0 50px;
  background-color: #421f44;
  display: flex;
  align-items: center;
  color: gray;
  border: 1px solid gray;
  border-radius: 5px;
  input {
    min-width: 30vw;
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > .MuiSvgIcon-root {
    margin-right: 20px;
    margin-left: auto;
  }
`;
