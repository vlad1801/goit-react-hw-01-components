import PropTypes from 'prop-types';
import { ListFriends } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ListFriends>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ListFriends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
