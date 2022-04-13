import { addDoc, collection, doc } from "firebase/firestore";
import React, { useRef } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";

function ChatInput({ channelName, channelId }) {
  // console.log(channelId);

  const roomsdoc = doc(db, `rooms`, channelId);
  const messagesCollection = collection(roomsdoc, "messages");
  const inputRef = useRef("");

  const sendMessage = (e) => {
    e.preventDefault();
    // console.log(inputRef.current.value);
    if (!channelId) {
      return false;
    }
    addDoc(messagesCollection, {
      message: inputRef.current.value,
      timestamp: serverTimestamp(),
      user: "Hadjaz Brahim",
    });
    inputRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          ref={inputRef}
          type="text"
          placeholder={`Message  #${channelName}`}
          
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  /* padding-top: 10px; */
  font-size: 20px;
  position: fixed;
  top: 70px;
  display: none !important;
`;
