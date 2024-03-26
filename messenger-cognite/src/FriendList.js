import React from "react";
import Friend from "./Friend";

function FriendList({ friends, onSelectFriend, selectedFriend }) {
  const onlineFriends = friends.filter((friend) => friend.online);
  const offlineFriends = friends.filter((friend) => !friend.online);

  return (
    <div className="friend-list bg-gray-200 p-4 min-w-[40%] rounded rounded-tr-none rounded-br-none">
      <h2 className="text-xl font-bold mb-4">Friends</h2>
      <ul>
        {[...onlineFriends, ...offlineFriends].map((friend) => (
          <Friend
            friend={friend}
            selectedFriend={selectedFriend}
            onSelectFriend={onSelectFriend}
          />
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
