import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from "components/user.json"
import { Box } from "utils/Box";
import data from 'components/data.json';
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
    </Box>
  );
};
