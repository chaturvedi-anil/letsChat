import React from "react";
import usersIcon from "../../assets/usersIcon.png";
import addUserLogo from "../../assets/addUserLogo.svg";
const ContainerHeader = () => {
  return (
    <div className="chat-box-header">
      <div className="chat-user-profile">
        <img src={usersIcon} alt="user icon" />
      </div>
      <div className="chat-user-name">
        <span>Anil Chaturvedi </span>
      </div>
      {/* <button className="add-user-btn">
        <img src={addUserLogo} alt="add logo" />
      </button> */}
    </div>
  );
};

export default ContainerHeader;
