import { h, Component } from 'preact'
/** @jsx h */
import { bind } from 'decko'
import FancyText from './FancyText'
import FancyButton from './FancyButton'

export default class CounterContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      text: ''
    };
  }

  @bind
  increment() {
    this.setState(state => ({ value: state.value + 1 }));
  }

  @bind
  decrement() {
    this.setState(state => ({ value: state.value - 1 }));
  }

  render() {
    const { value, text } = this.state;

    return (
      <div>
        <FancyText>{value}</FancyText>
        <FancyButton onClick={this.increment}>+</FancyButton>
        <FancyButton onClick={this.decrement}>-</FancyButton>
        <input value={text} onInput={this.linkState('text')} />
      </div>
    );
  }

}
