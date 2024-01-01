import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Sidebar.scss";
import ChatUser from "../ChatUser/ChatUser";
import searchLogo from "../../assets/searchLogo.svg";
import addLogo from "../../assets/addLogo.svg";
import { users } from "../../data";
import {
  activeUserAction,
  activeUserSelector,
} from "../../redux/Reducers/ContactReducer";

const Sidebar = () => {
  const dispatch = useDispatch();
  const activeUsers = useSelector(activeUserSelector);
  const [showUserList, setShowUserList] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  // const [chatUsers, setChatUsers] = useState([]);

  const handleOptionSelect = (e) => {
    setSelectedOption(e.target.innerHTML);
    dispatch(activeUserAction.add(e.target.innerHTML));
    setShowUserList(false);
  };

  // show user list
  const handleUserList = () => {
    setShowUserList(true);
  };

  useEffect(() => {}, []);

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
                  key={user}
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
        {activeUsers &&
          activeUsers.map((user) => <ChatUser userDetails={user} />)}
      </div>
    </div>
  );
};

export default Sidebar;
