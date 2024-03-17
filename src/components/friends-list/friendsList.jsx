import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className="friend-name">{name}</p>
      <p
        className={clsx({
          "friend-offline": !isOnline,
          "friend-online": isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul className="friends-table">
      {friends.map((friend) => {
        return (
          <li key={friend.id} className="friend">
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};
