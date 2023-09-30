import PropTypes from 'prop-types';

import {
  LabelStat,
  Title,
  StatList,
  ListItem,
  Percentage,
  Statistic,
} from './Statistics.styled';

import { randomColor } from './randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <Statistic>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(sts => (
          <ListItem key={sts.id} style={{ backgroundColor: randomColor() }}>
            <LabelStat>{sts.label}</LabelStat>
            <Percentage>{sts.percentage}%</Percentage>
          </ListItem>
        ))}
      </StatList>
    </Statistic>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
