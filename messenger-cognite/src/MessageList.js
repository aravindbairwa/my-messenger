// src/MessageList.js
import React from "react";
import {formatTime} from "./utils"

function MessageList({ messages }) {
  return (
    <div className="flex flex-col gap-4 mt-16">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`p-2 rounded-lg max-w-80  ${
            message.sender === "Me"
              ? "bg-green-200 self-end text-right"
              : "bg-gray-200 self-start"
          }`}
        >
          <div className="text-sm">{message.text}</div>
          <div className="text-xs text-gray-600">
            {message.sender} • {formatTime(new Date())}
          </div>
        </div>
      ))}
    </div>
  );
}


export default MessageList;
