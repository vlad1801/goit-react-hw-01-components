import PropTypes from 'prop-types';
import {
  Avatar,
  Description,
  Label,
  List,
  Name,
  Paragr,
  Profiles,
  Quantity,
  Stats,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profiles>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Paragr>{tag}</Paragr>
        <Paragr>{location}</Paragr>
      </Description>

      <Stats>
        <List>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </List>
        <List>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </List>
        <List>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </List>
      </Stats>
    </Profiles>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
