import React, { useEffect, useState } from "react";
import "./ChatUser.scss";
import usersIcon from "../../assets/usersIcon.png";
import { users } from "../../data";

const ChatUser = (props) => {
  const { userDetails } = props;
  const [userInfo, setUserInfo] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  let messageInfo;

  useEffect(() => {
    const filteredUser = users.filter(
      (user) => user.username === userDetails.username
    );
    let user_name = filteredUser[0].name;
    messageInfo = filteredUser[0].conversations[0]
      ? filteredUser[0].conversations[0].userMessages
          .reverse()
          .filter((mess) => mess.type === "receiver")
      : filteredUser[0].conversations[0];
    // console.log("message info : ", messageInfo[0]);
    if (messageInfo) {
      setUserInfo([
        {
          name: user_name,
          lastMessage: messageInfo.length > 0 ? messageInfo[0].message : null,
          time: messageInfo.length > 0 ? messageInfo[0].time : null,
        },
      ]);
    } else {
      setUserInfo([
        {
          name: user_name,
          lastMessage: null,
          time: null,
        },
      ]);
    }
  }, [userDetails]);

  const handleActiveChatUser = () => {
    // setShowUserDetails((prev) => !prev);
  };

  return (
    <>
      {userInfo.map((user) => (
        <div className="chat-user" onClick={handleActiveChatUser}>
          <div className="user-profile">
            <img src={usersIcon} alt="" />
          </div>
          <div className="user-content">
            <span className="user-name">{user.name}</span>
            <span className="new-message">{user.lastMessage}</span>
          </div>
          <div className="time">
            <span>{user.time}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatUser;
