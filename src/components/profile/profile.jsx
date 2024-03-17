export const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className="user">
      <div>
        <img
          src={image}
          alt="User avatar"
          className="user-avatar"
          width="100"
        />
        <p className="user-name">{name}</p>
        <p className="user-color-text">@{tag}</p>
        <p className="user-color-text">{location}</p>
      </div>

      <ul className="user-contener-stats">
        <li className="user-one-conteiner-stats">
          <span className="user-stats-name">Followers</span>
          <span className="user-stats">{stats.followers}</span>
        </li>
        <li className="user-one-conteiner-stats">
          <span className="user-stats-name">Views</span>
          <span className="user-stats">{stats.views}</span>
        </li>
        <li className="user-one-conteiner-stats">
          <span className="user-stats-name">Likes</span>
          <span className="user-stats">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
