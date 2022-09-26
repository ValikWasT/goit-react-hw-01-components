import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionTable } from "./TransactionHistory/TransactionHistory";
import user from "../data/user.json"
import { Box } from "utils/Box";
import data from '../data/data.json';
import friends from '../data/friends.json'
import transaction from '../data/transactions.json'

const { username, tag, location, avatar, stats } = user;
export const App = () => {
  return (
    <Box as='main' pl={20} pt={20}>
    <Profile   username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats} />
    <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionTable transaction={transaction} ></TransactionTable>
    </Box>
  );
};
