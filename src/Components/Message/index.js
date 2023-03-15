import React from "react";
import "./message.css";

export default function Message({ messageBody, isLatest, addMessage }) {
  return (
    <div className={messageBody.sender === "USER" ? "message user" : "message"}>
      <div className="message-text">{messageBody.message}</div>
      {messageBody.messageType !== "optionedMessage" && (
        <div className="message-time">
          {new Date(messageBody.timestamp).toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </div>
      )}
      {messageBody.options?.map((option, index) => (
        <div
          className={isLatest ? "message-options" : "message-options disabled"}
          key={index}
        >
          <div
            className="message-options-text"
            onClick={() => isLatest && addMessage("I want a callback")}
          >
            {option.optionText}
          </div>
          {option.optionSubText && (
            <div className="message-options-subtext">
              {option.optionSubText}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
