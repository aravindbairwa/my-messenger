import React, { useState } from "react";
import FriendList from "./FriendList";
import ChatWindow from "./ChatWindow";

const friends = [
  { name: "Amy", online: true },
  { name: "Sandeep", online: false },
  { name: "Pankaj", online: false },
  { name: "Aravind", online: true },
  { name: "Mohit", online: true },
];

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelectFriend = (friend) => {
    setSelectedFriend(friend);
  };

  return (
    <div className="flex justify-start items-center flex-col min-h-screen gap-12 p-8">
      <h1 className="text-3xl font-bold mb-8">Cognite - Messenger</h1>
      <div className="container flex w-full">
        <FriendList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        <ChatWindow friend={selectedFriend} />
      </div>
    </div>
  );
}

export default App;
