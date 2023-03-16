import React from "react";
import "./message.css";
import { getTimeString } from "../../utils";

export default function Message({ messageBody, isLatest, addMessage }) {
  return (
    <div className={messageBody.sender === "USER" ? "message user" : "message"}>
      <div className="message-text">{messageBody.message}</div>
      {messageBody.messageType !== "optionedMessage" && (
        <div className="message-time">
          {getTimeString(messageBody.timestamp)}
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
