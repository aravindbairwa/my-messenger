import React from "react";

function Friend({ friend = null, onSelectFriend, selectedFriend }) {
  const handleSelectFriend = (friend) => {
    onSelectFriend(friend);
  };

  return (
    <li
      key={friend.name}
      onClick={() => handleSelectFriend(friend)}
      className={`cursor-pointer hover:bg-gray-300 hover:text-black flex gap-2 p-2 rounded-md ${
        selectedFriend?.name === friend?.name ? "bg-gray-600 text-white" : ""
      }`}
    >
      {friend?.online ? (
        <span className="inline-flex self-center bg-green-500 min-w-2 min-h-2 rounded-xl"></span>
      ) : (
        <span className="bg-red-500  inline-flex self-center min-w-2 min-h-2 rounded-xl"></span>
      )}{" "}
      {friend.name}
    </li>
  );
}

export default Friend;
