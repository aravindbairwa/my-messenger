import React, { useState } from 'react';

function MessageInput({ onMessageSubmit }) {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    onMessageSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type a message..."
        className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none">
        Send
      </button>
    </form>
  );
}

export default MessageInput;
