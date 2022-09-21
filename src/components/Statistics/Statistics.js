import PropTypes from 'prop-types';
import { Box } from 'utils/Box';
import { getRandomHexColor } from 'utils/randomColor';
import {
  Title,
  StatisticsList,
  StatisticsItem,
  StatisticsNumbers,
  StatisticsText,
} from './StatisticsStyled';

export const Statistics = ({ data, title }) => {
  return (
    <Box as="section" width={200}>
      {title && <Title>{title}</Title>}

      <StatisticsList>
        {data.map(file => {
          return (
            <StatisticsItem
              key={file.id}
              bg={getRandomHexColor()}
              width={200 / data.length}
              py={1}
            >
              <StatisticsText> {file.label}</StatisticsText>
              <StatisticsNumbers> {file.percentage}%</StatisticsNumbers>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </Box>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
