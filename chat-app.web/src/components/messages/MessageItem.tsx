import React from "react";

import "./MessageItem.css";
import Message from "../../models/message";

interface MessageItemProps {
  message: Message;
}

function MessageItem({ message }: MessageItemProps) {
  return (
    <li
      className={
        !message.isIncoming
          ? "messages-list__item"
          : "messages-list__item messages-list__item--user-message"
      }
    >
      <div className="messages-list__item-content">
        <span className="messages-list__from">{message.from}</span>
        <span className="messages-list__text">{message.text}</span>
        <div className="messages-list__datetime">{message.sentAt}</div>
      </div>
    </li>
  );
}

export default MessageItem;
