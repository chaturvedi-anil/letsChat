import React, { useState, useRef } from "react";
import "./MainContainer.scss";
import addUserLogo from "../../assets/addUserLogo.svg";
import usersIcon from "../../assets/usersIcon.png";
import paperClip from "../../assets/paperClip.svg";
import chatUserProfile from "../../assets/chatUserProfile.jpeg";

const MainContainer = () => {
  const imgaeRef = useRef(null);

  return (
    <div className="chat-wrapper">
      <div className="chat-box-header">
        <div className="chat-user-profile">
          <img src={usersIcon} alt="user icon" />
        </div>
        <div className="chat-user-name">
          <span>Anil Chaturvedi </span>
        </div>
        <button className="add-user-btn">
          <img src={addUserLogo} alt="add logo" />
        </button>
      </div>
      <div className="chatbox-content">
        <div className="receiver-chat">
          <div className="chat">
            Lorem ipsum dolor sit, Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam vero voluptas ratione fuga quis earum fugiat
            non illum temporibus, libero suscipit nam nemo quasi iusto beatae,
            dolorum exercitationem quos assumenda! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident nesciunt, iusto nam aperiam,
            aut earum accusamus, mollitia dolores in beatae dicta perspiciatis
            expedita iste enim! Rerum vel dignissimos in eum?
          </div>
          <div className="time-photo">
            <img src={chatUserProfile} alt="userprofile" />
            <span>
              <b>You</b>
            </span>
            <span>{new Date().toLocaleTimeString().slice(0, 7)}</span>
          </div>
        </div>
        <div className="sender-chat">
          <div className="chat">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            dolorem, voluptate temporibus vero qui veniam esse sit hic iure id,
            corporis, quod ut architecto ab earum totam. Tempora, itaque natus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            omnis deleniti esse reiciendis odio laborum excepturi, eius
            voluptatum voluptas dolorum assumenda, mollitia numquam quos velit
            ipsa voluptates nulla, earum dolore.
          </div>
          <div className="time-photo">
            <span>{new Date().toLocaleTimeString().slice(0, 7)}</span>
            <span>
              <b>You</b>
            </span>
            <img src={chatUserProfile} alt="" />
          </div>
        </div>
        <div className="receiver-chat">
          <div className="chat">
            Lorem ipsum dolor sit, Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam vero voluptas ratione fuga quis earum fugiat
            non illum temporibus, libero suscipit nam nemo quasi iusto beatae,
            dolorum exercitationem quos assumenda! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Provident nesciunt, iusto nam aperiam,
            aut earum accusamus, mollitia dolores in beatae dicta perspiciatis
            expedita iste enim! Rerum vel dignissimos in eum?
          </div>
          <div className="time-photo">
            <img src={chatUserProfile} alt="userprofile" />
            <span>
              <b>You</b>
            </span>
            <span>{new Date().toLocaleTimeString().slice(0, 7)}</span>
          </div>
        </div>
        <div className="sender-chat">
          <div className="chat">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            dolorem, voluptate temporibus vero qui veniam esse sit hic iure id,
            corporis, quod ut architecto ab earum totam. Tempora, itaque natus.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            omnis deleniti esse reiciendis odio laborum excepturi, eius
            voluptatum voluptas dolorum assumenda, mollitia numquam quos velit
            ipsa voluptates nulla, earum dolore.
          </div>
          <div className="time-photo">
            <span>{new Date().toLocaleTimeString().slice(0, 7)}</span>
            <span>
              <b>You</b>
            </span>
            <img src={chatUserProfile} alt="" />
          </div>
        </div>
      </div>

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
