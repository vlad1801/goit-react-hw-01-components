import PropTypes from 'prop-types';

import FriendsListItem from './FriendsItem';

import css from './FriendsListStyles.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => {
        return (
          <FriendsListItem
            key={friend.id}
            name={friend.name}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
