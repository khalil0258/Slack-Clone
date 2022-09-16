import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useDispatch, useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import { enterRoom, selectRoomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { doc, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
// import { collection } from "firebase/firestore";
function Chat() {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoomId);
  const document = doc(db, "rooms", roomId);
  const [roomDetail] = useDocument(roomId && document);
  const collectionRef = collection(document, "messages");
  const q = query(collectionRef, orderBy("timestamp", "asc"));
  const [roomMessages, loading] = useCollection(roomId && q);
  // console.log(roomDetail?.data());
  // console.log(roomMessages?.docs);
  useEffect(() => {
    console.log("hello");
    chatRef?.current?.scrollIntoView();
  }, [roomId, loading]);
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetail?.data().name}</strong>
            </h4>
            <StarBorderOutlinedIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon />
              Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>
          {roomMessages?.docs.map((doc) => {
            const { message, timestamp, user } = doc.data();
            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
              />
            );
          })}
          <ChatBottom ref={chatRef} />
        </ChatMessages>
        <ChatInput channelName={roomDetail?.data().name} channelId={roomId} />
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatBottom = styled.div`
  padding-bottom: 200px;
`;

const ChatMessages = styled.div``;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }
  .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
const ChatContainer = styled.div`
  flex: 0.7%;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
