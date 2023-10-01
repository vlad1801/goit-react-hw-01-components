import css from './FriendsListStyles.module.css';

const FriendItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.listItem}>
      <span
        className={css.isOnline}
        style={isOnline ? { backgroundColor: '#3ABF5B' } : { backgroundColor: '#E34E4E' }}
      >{isOnline}</span>
      <img className={css.avatar} src={avatar} alt={name} />
      <p className={css.name}>{name}</p>
    </li>
  );
};


export default FriendItem;

