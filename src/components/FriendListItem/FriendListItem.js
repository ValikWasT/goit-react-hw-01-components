import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendName,
  FriendPhoto,
  FriendStatus,
} from './FriendListItemStyled';
export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <FriendItem>
      <FriendStatus
        width={20}
        height={20}
        bg={isOnline ? 'green' : 'red'}
        borderRadius="100%"
      ></FriendStatus>
      <FriendPhoto src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
