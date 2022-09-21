import styled from 'styled-components';
import { space, color, layout, border, typography } from 'styled-system';
export const FriendItem = styled.li`
  width: 200px;
  display: flex;
  align-items: center;
  list-style: none;
`;
export const FriendName = styled('p')(layout, color, space);
export const FriendPhoto = styled('img')(layout, color, space);
export const FriendStatus = styled('div')(layout, color, space, border);
