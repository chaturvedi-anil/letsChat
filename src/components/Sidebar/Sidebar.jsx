import React, { useState } from "react";
import "./Sidebar.scss";
import ChatUser from "../ChatUser/ChatUser";
import searchLogo from "../../assets/searchLogo.svg";
import addLogo from "../../assets/addLogo.svg";
import { users } from "../../data";
const Sidebar = () => {
  const [showUserList, setShowUserList] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (e) => {
    console.log("options : ", e.target.innerHTML);
    setSelectedOption(e.target.innerHTML);
    setShowUserList(false);
  };
  const handleUserList = () => {
    setShowUserList(true);
  };
  return (
    <div className="sidebar">
      <div className="header">
        <h1>LetsChat</h1>
      </div>
      <div className="searchbox">
        <img src={searchLogo} alt="" />
        <input type="text" placeholder="Search for conversation" />
      </div>
      <div className="add-btn">
        <h4>Start New Conversation</h4>
        <button onClick={handleUserList}>
          <img src={addLogo} alt="add user" />
        </button>
        <div className={`usersList-${showUserList ? "display" : "none"}`}>
          <h3>Start Chat With</h3>
          <ul>
            {users &&
              users.map((user) => (
                <li
                  key={user.username}
                  value={user.username}
                  onClick={handleOptionSelect}
                >
                  {user.username}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="chatname-container">
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
        <ChatUser />
      </div>
    </div>
  );
};

export default Sidebar;
