import { Box } from 'utils/Box';
import {
  ProfileContainer,
  UserContainer,
  StatsContainer,
  StatsItem,
  UserAvatar,
  UserInfo,
  StatsInfo,
  StatsNumber,
} from './ProfileStyled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <UserContainer>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserInfo>{username}</UserInfo>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserContainer>
      <Box width={600} m="0 auto">
        <StatsContainer>
          <StatsItem>
            <StatsInfo>Followers</StatsInfo>
            <StatsNumber> {stats.followers}</StatsNumber>
          </StatsItem>
          <StatsItem>
            <StatsInfo>Views</StatsInfo>
            <StatsNumber> {stats.views}</StatsNumber>
          </StatsItem>
          <StatsItem>
            <StatsInfo>Likes</StatsInfo>
            <StatsNumber> {stats.likes}</StatsNumber>
          </StatsItem>
        </StatsContainer>
      </Box>
    </ProfileContainer>
  );
};
