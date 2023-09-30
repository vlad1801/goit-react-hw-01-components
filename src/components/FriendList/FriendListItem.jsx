import PropTypes from 'prop-types';
import {
  AvatarFriends,
  Friendsitem,
  NameFriends,
  StatusFriends,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Friendsitem>
      <StatusFriends status={isOnline}></StatusFriends>
      <AvatarFriends src={avatar} alt={name} width="48" />
      <NameFriends>{name}</NameFriends>
    </Friendsitem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
