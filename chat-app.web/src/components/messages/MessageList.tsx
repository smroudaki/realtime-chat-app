import React from "react";

import "./MessageList.css";
import Message from "../../models/message";
import MessageItem from "./MessageItem";

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <ul className="messages-list">
      {messages.map((message, idx) => (
        <MessageItem key={idx} message={message} />
      ))}
    </ul>
  );
};

export default MessageList;
