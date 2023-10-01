import css from './ProfileStyles.module.css';
import PropTypes from 'prop-types'

const Profile = ({imageUrl, userName, userTag, userLocation, stats}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={imageUrl}
          alt={userName}
          className={css.avatar}
        />
        <p className={`${css.nullStyles} ${css.cardTitle}`}>{userName}</p>
        <p className={`${css.nullStyles} ${css.cardParagraph}`}>@{userTag}</p>
        <p className={`${css.nullStyles} ${css.cardParagraph}`}>{userLocation}</p>
      </div>

      <ul className={`${css.nullStyles} ${css.list}`}>
        <li className={css.listItem}>
          <span className={css.stats}>Followers</span>
          <span className={css.statsAmount}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.stats}>Views</span>
          <span className={css.statsAmount}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.stats}>Likes</span>
          <span className={css.statsAmount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
}


export default Profile