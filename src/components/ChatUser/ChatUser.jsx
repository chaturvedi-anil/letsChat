import React from "react";
import "./ChatUser.scss";
import usersIcon from "../../assets/usersIcon.png";

const ChatUser = () => {
  return (
    <div className="chat-user">
      <div className="user-profile">
        <img src={usersIcon} alt="" />
      </div>
      <div className="user-content">
        <span className="user-name">Anil Chaturvedi</span>
        <span className="new-message">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        </span>
      </div>
      <div className="time">
        <span>9.30 PM</span>
      </div>
    </div>
  );
};

export default ChatUser;
