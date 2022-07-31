/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Row from './Row';

class Calculator extends React.Component {
  render() {
    return (
      <div id="calculator">
        <div className="screen" />
        <Row first="AC" second="+/-" third="%" fourth="÷" />
        <Row first="7" second="8" third="9" fourth="x" />
        <Row first="4" second="5" third="6" fourth="-" />
        <Row first="1" second="2" third="3" fourth="+" />
        <Row first="0" second="." third="=" />
      </div>
    );
  }
}

export default Calculator;
