import React from "react";
import chatUserProfile from "../../assets/chatUserProfile.jpeg";
import { users } from "../../data";

const ChatboxContent = () => {
  const activeUser = "andil@gmail.com";

  // Find the active user from the 'users' array
  const activeUserData = users.find((user) => user.username === activeUser);

  // Check if active user exists and has conversations
  if (!activeUserData || !activeUserData.conversations) {
    return (
      <div className="no-conversation">
        <h1>No conversations found for the active user.</h1>
      </div>
    );
  }

  return (
    <div className="chatbox-content">
      {activeUserData.conversations.map(
        (conversation, index) =>
          // Check if conversation and userMessages exist
          conversation.userMessages &&
          conversation.userMessages.map((details, messageIndex) => (
            <div
              key={`${index}-${messageIndex}`}
              className={
                details.type === "sender" ? "sender-chat" : "receiver-chat"
              }
            >
              <div className="chat">{details.message}</div>
              <div className="time-photo">
                {details.type === "sender" ? (
                  <>
                    <span>{details.time}</span>
                    <span>
                      <b>You</b>
                    </span>
                    <img src={chatUserProfile} alt="" />
                  </>
                ) : (
                  <>
                    <img src={chatUserProfile} alt="" />
                    <span>
                      <b>{conversation.receiverName}</b>
                    </span>
                    <span>{details.time}</span>
                  </>
                )}
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default ChatboxContent;
