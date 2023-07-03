import React from "react";

import "./UserItem.css";
import User from "../../models/user";
import avatarMale from "../../assets/images/avatar_male.png";

interface UserItemProps {
  user: User;
}

function UserItem({ user }: UserItemProps) {
  return (
    <li className="users-list__item">
      <img className="users-list__img" src={avatarMale} alt="User" />
      <div className="users-list__info">
        <div className="users-list__row">
          <span className="users-list__name">{user.name}</span>
        </div>
        <div className="users-list__row">
          <div className="users-list__recent-message">
            <span className="users-list__message-text">{user.joinedAt}</span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default UserItem;
