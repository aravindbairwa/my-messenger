import React, { useState, useEffect, useRef } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

function ChatWindow({ friend }) {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new message is added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset the chat history when a new friend is selected
  useEffect(() => {
    setMessages([]);
  }, [friend]);

  const handleMessageSubmit = (message) => {
    setMessages([...messages, { sender: "Me", text: message }]);
  };

  return (
    <>
      {friend ? (
        <div className="bg-white border border-gray-300 rounded-lg rounded-tl-none rounded-bl-none overflow-hidden flex flex-col h-96 min-w-[60%] relative">
          <div className="flex-1 overflow-y-auto p-4">
            {friend && (
              <div
                className={`${
                  friend.online ? "bg-green-500" : "bg-red-500"
                } absolute top-0 left-0 right-0 text-white p-4 flex justify-between`}
              >
                <span>Chatting with: {friend.name}</span>
                {!friend.online && (
                  <span className="px-2 mx-4 self-end">
                    {friend.name} is currently offline. There may be a delay in
                    response.
                  </span>
                )}
              </div>
            )}

            {friend && <MessageList messages={messages} />}
            <div ref={messagesEndRef}></div>
          </div>
          <div className="p-4  border border-t-[0.5px] border-black-stone-950">
            <MessageInput onMessageSubmit={handleMessageSubmit} />
          </div>
        </div>
      ) : (
        <div className="bg-white border border-gray-300 rounded-lg rounded-tl-none rounded-bl-none overflow-hidden flex flex-col h-96 min-w-[60%] relative">
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex justify-center items-center h-full">
              <span className="text-2xl text-gray-600  font-extrabold">
                Select a friend to start chatting!
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWindow;
