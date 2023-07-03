import React from "react";

import "./UserList.css";
import User from "../../models/user";
import UserItem from "./UserItem";

interface UserListProps {
  users: User[];
}

function UserList({ users }: UserListProps) {
  return (
    <ul className="users-list">
      {users.map((user, idx) => (
        <UserItem key={idx} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
