import React, { useState } from "react";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";

import "./fontiran.css";
import "./App.css";
import ChatRoom from "./components/ChatRoom";
import Lobby from "./components/Lobby";
import Message from "./models/message";
import User from "./models/user";

const App = () => {
  const [connection, setConnection] = useState<any>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const joinRoom = async (userName: string) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("http://localhost:5058/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (message: Message) => {
        setMessages((messages) => [...messages, message]);
      });

      connection.on("ReceiveConnectedUsers", (users: User[]) => {
        setUsers(users);
      });

      connection.onclose((e) => {
        setConnection(undefined);
        setMessages([]);
        setUsers([]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", userName);
      setConnection(connection);
    } catch (e) {
      console.error(e);
    }
  };

  const sendMessage = async (message: string) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.error(e);
    }
  };

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="app">
      {!connection ? (
        <Lobby joinRoom={joinRoom} />
      ) : (
        <ChatRoom
          users={users}
          messages={messages}
          sendMessage={sendMessage}
          closeConnection={closeConnection}
        />
      )}
    </div>
  );
};

export default App;
