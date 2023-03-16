import React from "react";
import "./card.css";
import { getDateString } from "../../utils";

export default function Card({ data, handleSelect }) {
  const messageListLength = data.messageList.length;
  return (
    <div
      className={data.isSelected ? "card selected" : "card"}
      id={data.id}
      onClick={() => handleSelect(data.id)}
    >
      <img className="card-pic" src={data.imageURL} alt="Order pic" />
      <div className="card-body">
        <div className="card-body-title">{data.title}</div>
        <div className="card-body-orderId">Order {data.orderId}</div>
        <div className="card-body-msg">
          {messageListLength > 0 &&
            data.messageList[messageListLength - 1].message}
        </div>
      </div>
      <div className="card-date">
        {getDateString(data.latestMessageTimestamp)}
      </div>
    </div>
  );
}
