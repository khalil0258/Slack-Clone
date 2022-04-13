import {
  collection,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";

import React from "react";
import styled from "styled-components";
import { db, firebaseapp } from "../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

function SideBarOption({ Icon, title, AddChannelOption, id }) {
  const collectionRef = collection(db, "rooms");

  const dispatch = useDispatch();
  const addChannel = async () => {
    // console.log("hello");
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      addDoc(collectionRef, {
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };
  return (
    <SideBarOptionContainer
      onClick={AddChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <h3>
            <span>#</span>
            {title}
          </h3>
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  );
}

export default SideBarOption;

const SideBarOptionContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  font-size: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    background: #340e36;
  }
  h3 {
    margin-left: 1rem;
    font-weight: 500;
  }
  h3 > span {
    padding: 15px;
  }
`;
const SideBarOptionChannel = styled.div``;
