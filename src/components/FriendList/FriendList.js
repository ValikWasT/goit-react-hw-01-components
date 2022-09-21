import { Box } from 'utils/Box';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Box as="ul" p={0}>
      {friends.map(friend => {
        return (
          <FriendListItem friend={friend} key={friend.id}></FriendListItem>
        );
      })}
    </Box>
  );
};
