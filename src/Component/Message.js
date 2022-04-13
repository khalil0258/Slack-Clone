import React from "react";
import styled from "styled-components";
import me from "../images/me.jpg";
function Message({ message, timestamp, user }) {
  //   console.log(timestamp?.toDate());
  const date = new Date(timestamp?.toDate());
//   console.log(date);
  return (
    <MessageContainer>
      <img src={me} alt="bill gates" />
      <MessageInfo>
        <h4>
          {user}
          <span>{date.toUTCString()}</span>
          <p>{message}</p>
        </h4>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  span {
    color: gray;
    font-weight: 300;
    margin-left: 5px;
    font-size: 10px;
  }
  p{
      font-size: 15px;
      font-weight:550;
      padding-top: 5px;
  }
`;
