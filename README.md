# Realtime Chat Application

The goal of this project is to create a chat room where users can communicate with each other via text messages. React and TypeScript are used on the client side, and .NET Core 6.0 is used on the server side. Real-time connectivity and communication is achieved through the SignalR library, which uses Web Sockets.

Login page:
![Login Page](https://github.com/smroudaki/realtime-chat-app/blob/main/chat-app.web/src/assets/images/login-page.png)

Chat page:
![Chat Page](https://github.com/smroudaki/realtime-chat-app/blob/main/chat-app.web/src/assets/images/chat-page.png)

How it works:
https://github.com/smroudaki/realtime-chat-app/blob/main/chat-app.web/src/assets/videos/how-it-works.mp4

## Features
- Join Room
- Leave Room
- Group Chat
- Basic Emojis

## Prerequisites
To run the application, these tools must be installed in your systems:
- Node.js v18.15.0
- .NET Core v6.0

## Getting Started
Follow these steps to run the application:
1. Download the project
2. Open it with vscode or any editors you prefer
3. To run the server side, change directory to: `chat-app.api`
4. Then, run it using the command: `dotnet run`
5. To run the client side, change directory to: `chat-app.web`
6. Then, install the required packages using the command: `npm install`
7. Finally, run it using the command: `npm start`
