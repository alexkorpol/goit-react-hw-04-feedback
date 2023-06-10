import { useState } from 'react';
import ButtonOptions from './ButtonOptions/ButtonOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Level from './Level/Level';
import Section from './Section/Section';

export default function App() {
      const [good, setGood] = useState(0);
      const [neutral, setNeutral] = useState(0);
      const [bad, setBad] = useState(0);

  // ! ====== Callback for count a press one of them key ======

  const onLeaveFeedback = state => {
    switch (state) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        return;
    }
};

  // ! ======= Count summary feedback =======
  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  const total = countTotalFeedback();

  // ! ====== Count positive feedback rescentage =======
  const countPositiveFeedbackPercentage = () => {
    if (total === 0)  return;
    return Math.round(good / total * 100);
  }

  // ! ====== Count neutral feedback rescentage =======
   const countNeutralFeedbackPercentage = () => {
    if (total === 0) return;
    const good = countPositiveFeedbackPercentage();
    const bad = countBadFeedbackPercentage();
    return 100 - good - bad;

  }

  // ! ====== Count bad feedback rescentage =======
   const countBadFeedbackPercentage = () => {
    return Math.round(bad / total * 100);
  }
    const statesArray = Object.keys({ good, neutral, bad });

  return (
      <Level>

        <Section title="Please leave feedback">
          <ButtonOptions
            statesArray={statesArray}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
              neutralPercentage={countNeutralFeedbackPercentage()}
              badPercentage={countBadFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        </Level>
      );
  }

// };


