// import './friends-list.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline}</p>
    </div>
  );
};

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
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
