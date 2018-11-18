import React, {Component} from 'react';
import ResultView from './ResultView';
import calculator from '../models/calculator.js';


class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialAmount: '',
      interestRate: '',
      numberOfYears: '',
      balance: ''
    };

    this.handleInitialAmountChange = this.handleInitialAmountChange.bind(this);
    this.handleInterestRateChange = this.handleInterestRateChange.bind(this);
    this.handleNumberOfYearsChange = this.handleNumberOfYearsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInitialAmountChange(event) {
    this.setState({initialAmount: event.target.value});
  }

  handleInterestRateChange(event) {
    this.setState({interestRate: event.target.value});
  }

  handleNumberOfYearsChange(event) {
    this.setState({numberOfYears: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const initialAmount = this.state.initialAmount;
    const interestRate = this.state.interestRate;
    const numberOfYears = this.state.numberOfYears;

    if (!initialAmount || !interestRate || !numberOfYears) {
      return;
    }

    const balance = calculator.calculateCompoundInterest(initialAmount, interestRate, numberOfYears);
    console.log(balance);
  }

  render() {
    return <div>
      <h1>{this.props.title}</h1>
      <form className="compound-interest-form" onSubmit={this.handleSubmit}>
        <input
          type="number"
          placeholder="Initial Amount"
          min="1"
          required
          onChange={this.handleInitialAmountChange}
        />
        <br/>
        <input
          type="number"
          placeholder="Interest Rate"
          min="0.01"
          step="any"
          required
          onChange={this.handleInterestRateChange}
        />
        <br/>
        <input
          type="number"
          placeholder="Number of Years"
          min="1"
          step="any"
          required
          onChange={this.handleNumberOfYearsChange}
        />
        <br/>
        <input type="submit" value="Calculate Compound Interest" />
        <br/>
      </form>
      <ResultView balance={this.state.balance}/>
    </div>
  }
}

export default Calculator;