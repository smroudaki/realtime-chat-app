import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./Lobby.css";

interface LobbyProps {
  joinRoom: (userName: string) => void;
}

const Lobby = ({ joinRoom }: LobbyProps) => {
  const [userName, setUserName] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinRoom(userName);
  };

  return (
    <div className="lobby">
      <span className="lobby__icon">
        <FontAwesomeIcon icon={icon({ name: "arrow-right-to-bracket" })} />
      </span>
      <h2 className="lobby__heading">ورود به مکالمه</h2>
      <form className="lobby__frm" onSubmit={onSubmitHandler}>
        <input
          className="lobby__input"
          type="text"
          placeholder="نام"
          onChange={onChangeHandler}
        />
        <button className="lobby__btn" type="submit" disabled={!userName}>
          تایید
        </button>
      </form>
    </div>
  );
};

export default Lobby;
