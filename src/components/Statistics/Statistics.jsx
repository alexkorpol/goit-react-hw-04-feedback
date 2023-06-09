import PropTypes from 'prop-types';
import { StatisticList, StatisticItem } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  neutralPercentage,
  badPercentage,
}) => {
  return (
    <StatisticList>
      <StatisticItem>
        Good: {good}
      </StatisticItem>
      <StatisticItem>
        Neutral: {neutral}
      </StatisticItem>
      <StatisticItem>
        Bad: {bad}
      </StatisticItem>
      <StatisticItem>
         Total: {total}
      </StatisticItem>
      <StatisticItem>
         Positive Feedback: {positivePercentage}%
      </StatisticItem>
      <StatisticItem>
         Neutral Feedback: {neutralPercentage}%
      </StatisticItem>
      <StatisticItem>
         Bad Feedback: {badPercentage}%
      </StatisticItem>


    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number.isRequired,
  neutralPercentage: PropTypes.number.isRequired,
badPercentage: PropTypes.number.isRequired,
};

export default Statistics;
