import React from 'react'
import FancyText from './FancyText'
import FancyButton from './FancyButton'

export default class CounterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.addToValue = this.addToValue.bind(this);
  }

  increment() {
    this.addToValue(1);
  }

  decrement() {
    this.addToValue(-1);
  }

  addToValue(value) {
    this.setState(state => ({
      value: state.value + value
    }));
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <FancyText>{value}</FancyText>
        <FancyButton onClick={this.increment}>+</FancyButton>
        <FancyButton onClick={this.decrement}>-</FancyButton>
      </div>
    );
  }

}
