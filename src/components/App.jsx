import React, { Component } from 'react';
import ButtonOptions from './ButtonOptions/ButtonOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Level from './Level/Level';
import Section from './Section/Section';


class App extends Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  

  // ! ====== Callback for count a press one of them key ======
  onLeaveFeedback = (state) => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  // ! ======= Count summary feedback =======
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  // ! ====== Count positive feedback rescentage =======
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0)  return 0;
    return Math.round(good / total * 100);
  }

  // ! ====== Count neutral feedback rescentage =======
  countNeutralFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total === 0)  return 0;
    const good = this.countPositiveFeedbackPercentage();
    const bad = this.countBadFeedbackPercentage();
    return 100 - good - bad;

  }

  // ! ====== Count bad feedback rescentage =======
  countBadFeedbackPercentage() {
    const { bad } = this.state;
    const total = this.countTotalFeedback();
    if (total === 0)  return 0;
    return Math.round(bad / total * 100);
  }

  // !====== Message for User ======



  render() {
    const { good, neutral, bad } = this.state;
    const statesArray = Object.keys(this.state);

    return (
      <Level>

        <Section title="Please leave feedback">
          <ButtonOptions
            statesArray={statesArray}
            onLeaveFeedback={this.onLeaveFeedback}
            timeOutNoteUser={this.timeOutNoteUser}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              neutralPercentage={this.countNeutralFeedbackPercentage()}
              badPercentage={this.countBadFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        </Level>
      );
  }

};

export default App


