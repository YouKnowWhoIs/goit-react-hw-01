import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => {
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
