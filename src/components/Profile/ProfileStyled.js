import styled from 'styled-components';
export const ProfileContainer = styled.div`
  width: 200px;
`;
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 0 auto;
  width: 200px;
  height: 300px;
  font-size: 12px;
`;
export const StatsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  font-size: 8px;
  padding: 0;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
`;
export const UserAvatar = styled.img``;
export const UserInfo = styled.p`
  margin: 0 auto;
`;
export const StatsInfo = styled.span`
  margin: 0 auto;
`;
export const StatsNumber = styled.span`
  margin: 0 auto;
`;
