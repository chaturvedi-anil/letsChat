import React, { useState, useRef } from "react";
import "./MainContainer.scss";

import paperClip from "../../assets/paperClip.svg";
import ChatboxContent from "./ChatboxContent";
import ContainerHeader from "./ContainerHeader";

const MainContainer = () => {
  const [activeChat, setActiveChat] = useState(false);
  const imgaeRef = useRef(null);
  if (!activeChat) {
    return (
      <div className="chat-wrapper">
        <h1>No active chat</h1>
      </div>
    );
  }
  return (
    <div className="chat-wrapper">
      <ContainerHeader />
      <ChatboxContent />

      <div className="send-input-container">
        <button className="get-image-icon">
          <img src={paperClip} alt="get-image" />
          <input type="file" ref={imgaeRef} />
        </button>
        <div className="send-message-inputBox">
          <input type="text" placeholder="Type your message here" />
        </div>
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
};

export default MainContainer;
