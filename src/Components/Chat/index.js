import React, { useRef } from "react";
import "./chat.css";
import { clone } from "../../utils";
import ChatBody from "../ChatBody";

export default function Chat({ data, updateCard }) {
  const inputRef = useRef();

  const handleInputKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSendMessage();
    }
  };

  const handleSendMessage = (msg) => {
    const newMessage = inputRef.current.value;
    if (newMessage === "" && !msg) {
      return;
    }

    const newData = clone(data);
    newData.messageList.push({
      messageId: ("msg" + Date.now()).substr(0, 5),
      message: newMessage !== "" ? newMessage : msg ? msg : null,
      timestamp: Date.now(),
      sender: "USER",
      messageType: "text",
    });
    updateCard(newData);
    inputRef.current.value = "";
  };

  return (
    <div className="chat">
      <div className="chat-title">
        <img className="chat-pic" src={data.imageURL} alt="Order pic" />
        <div>{data.title}</div>
      </div>
      <div className="chat-body">
        <ChatBody data={data} handleSendMessage={handleSendMessage} />
      </div>
      <input
        className="chat-msg"
        type="text"
        placeholder="Type a Message..."
        ref={inputRef}
        onKeyUp={handleInputKeyUp}
      ></input>
      <button className="chat-send" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
}
