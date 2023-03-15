import React, { useState } from "react";
import Message from "../Message";
import "./chat.css";

export default function Chat({ data, updateCard }) {
  const [newMessage, setNewMessage] = useState("");

  const handleInputKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSendMessage();
    }
  };

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = (msg) => {
    if (newMessage === "" && !msg) {
      return;
    }

    const newData = JSON.parse(JSON.stringify(data));
    newData.messageList.push({
      messageId: ("msg" + Date.now()).substr(0, 5),
      message: newMessage !== "" ? newMessage : msg ? msg : null,
      timestamp: Date.now(),
      sender: "USER",
      messageType: "text",
    });
    updateCard(newData);
    setNewMessage("");
  };

  const GetChatBody = () => {
    let lastDate = "";
    let newDate = "";
    const messageListlength = data.messageList.length;

    if (messageListlength === 0) {
      return (
        <div className="message-none">Send a message to start chatting</div>
      );
    }

    return data.messageList.map((message, index) => {
      newDate = new Date(message.timestamp).toLocaleDateString();

      if (newDate !== lastDate) {
        lastDate = newDate;
        return [
          <div key={message.timestamp} className="message-date">
            {newDate}
          </div>,
          <Message
            messageBody={message}
            key={index}
            addMessage={handleSendMessage}
            isLatest={index === messageListlength - 1}
          />,
        ];
      }

      return (
        <Message
          messageBody={message}
          key={index}
          addMessage={handleSendMessage}
          isLatest={index === messageListlength - 1}
        />
      );
    });
  };

  return (
    <div className="chat">
      <div className="chat-title">
        <img className="chat-pic" src={data.imageURL} alt="Order pic" />
        <div>{data.title}</div>
      </div>
      <div className="chat-body">
        <GetChatBody />
      </div>
      <input
        className="chat-msg"
        type="text"
        placeholder="Type a Message..."
        onChange={handleNewMessageChange}
        value={newMessage}
        onKeyUp={handleInputKeyUp}
      ></input>
      <button className="chat-send" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
}
