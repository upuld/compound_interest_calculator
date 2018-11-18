import React from 'react';

const ResultView = (props) => {
  return (
    <div className="result-view-wrapper">
    <h2>Your Result</h2>
    <p className="balance-display">Balance: £{props.balance}</p>
    <p>Initial Amount (Principal): £{props.initialAmountForResultView}</p>
    <p>Interest Rate: {props.interestRateForResultView}%</p>
    <p>Number of Years: {props.numberOfYearsForResultView}</p>
    <p>Amount From Interest: £{props.amountFromInterest}</p>
    </div>
  );
}

export default ResultView;