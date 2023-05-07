import Message from "../Message";
import "./chatBody.css";
import { getDateString } from "../../utils";

export default function ChatBody({ data, handleSendMessage }) {
  let lastDate = "";
  let newDate = "";
  const messageListlength = data.messageList.length;

  if (messageListlength === 0) {
    return <div className="message-none">Send a message to start chatting</div>;
  }

  return data.messageList.map((message, index) => {
    newDate = getDateString(message.timestamp);

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
}
