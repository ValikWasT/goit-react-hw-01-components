import styled from 'styled-components';
import { space, color, layout } from 'styled-system';
import { getRandomHexColor } from 'utils/randomColor';
export const Title = styled.h2`
  font-size: 16px;
  text-align: center;
  margin: 0;
  padding: 10px;
`;
export const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const StatisticsItem = styled('li')(color, layout, space);
export const StatisticsText = styled.span`
  display: block;
  text-align: center;
  font-size: 8px;
  margin-bottom: 2px;
`;
export const StatisticsNumbers = styled.span`
  display: block;
  text-align: center;
  font-size: 12px;
`;
