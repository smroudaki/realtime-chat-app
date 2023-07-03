import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./SendMessage.css";

interface SendMessageProps {
  sendMessage: (message: string) => void;
}

function SendMessage({ sendMessage }: SendMessageProps) {
  const [message, setMessage] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <form className="send-message" onSubmit={onSubmitHandler}>
      <input
        className="send-message__input"
        onChange={onChangeHandler}
        value={message}
        type="text"
        placeholder="متن پیام"
      />
      <button className="send-message__icon" type="submit" disabled={!message}>
        <FontAwesomeIcon icon={icon({ name: "arrow-left" })} />
      </button>
    </form>
  );
}

export default SendMessage;
