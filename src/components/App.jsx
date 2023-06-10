import { useState } from 'react';
import ButtonOptions from './ButtonOptions/ButtonOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Level from './Level/Level';
import Section from './Section/Section';

export default function App() {
// class App extends Component {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });




  // ! ====== Callback for count a press one of them key ======

  const onLeaveFeedback = state => {
    setState(prevState => ({ ...prevState, [state]: prevState[state] + 1 }));
  };


  // ! ======= Count summary feedback =======
  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  }

  // ! ====== Count positive feedback rescentage =======
  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    // const total = this.countTotalFeedback();
    const { good } = state;
    const total = countTotalFeedback();
    if (total === 0)  return 0;
    return Math.round(good / total * 100);
  }

  // ! ====== Count neutral feedback rescentage =======
   const countNeutralFeedbackPercentage = () => {
    // const total = this.countTotalFeedback();
    const total = countTotalFeedback();
    if (total === 0) return 0;
    // const good = this.countPositiveFeedbackPercentage();
    // const bad = this.countBadFeedbackPercentage();
    const good = countPositiveFeedbackPercentage();
    const bad = countBadFeedbackPercentage();
    return 100 - good - bad;

  }

  // ! ====== Count bad feedback rescentage =======
   const countBadFeedbackPercentage = () => {
    // const { bad } = this.state;
    // const total = this.countTotalFeedback();
    const { bad } = state;
    const total = countTotalFeedback();
    if (total === 0)  return 0;
    return Math.round(bad / total * 100);
  }

  // !====== Message for User ======



  // render() {
    // const { good, neutral, bad } = this.state;
    // const statesArray = Object.keys(this.state);

    const { good, neutral, bad } = state;
    const statesArray = Object.keys(state);



  // ? робимо змінну бо хуки не приймають функцію так як я передав пропТипи числом
  // const totalFeedback = countTotalFeedback();
  // const positiveFeedbackPercentage = countPositiveFeedbackPercentage();


    return (
      <Level>

        <Section title="Please leave feedback">
          <ButtonOptions
            statesArray={statesArray}
            // onLeaveFeedback={this.onLeaveFeedback}
            // timeOutNoteUser={this.timeOutNoteUser}
            onLeaveFeedback={onLeaveFeedback}
            // timeOutNoteUser={timeOutNoteUser} delete
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              // total={this.countTotalFeedback()}
              // positivePercentage={this.countPositiveFeedbackPercentage()}
              // neutralPercentage={this.countNeutralFeedbackPercentage()}
              // badPercentage={this.countBadFeedbackPercentage()}
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


