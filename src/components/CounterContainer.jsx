import React from 'react'
import FancyText from './FancyText'
import FancyButton from './FancyButton'

export default class CounterContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
    const { value } = this.state;

    return (
      <div>
        <FancyText>{value}</FancyText>
        <FancyButton onClick={() => {
          this.setState({ value: value + 1 })
        }}>
          +
        </FancyButton>
        <FancyButton onClick={() => {
          this.setState({ value: value - 1 })
        }}>
          -
        </FancyButton>
      </div>
    );
  }

}
