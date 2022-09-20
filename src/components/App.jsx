import { Profile } from "./Profile/Profile";
import user from "components/user.json"
const { username, tag, location, avatar, stats } = user;
// console.log(username)
// console.log(user.tag)
export const App = () => {
  return (
    <Profile   username={username}
  tag={tag}
  location={location}
  avatar={avatar}
  stats={stats}/>
  );
};
