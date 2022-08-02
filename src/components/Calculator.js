/* eslint-disable */

import React from 'react';
import Row from './Row';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataObj: {
        total: null,
        next: null,
        operation: null
      }
    }
    this.updateDataObj = this.updateDataObj.bind(this)
  }

    componentDidUpdate() {
    console.log(this.state.dataObj)
  }


  updateDataObj(event) {
    let value = event.target.textContent
    this.setState(prevState => ({
      dataObj: {...calculate(prevState.dataObj, value)},
    }))
  }

  render() {
    return (
      <div id="calculator">
        <div className="screen">0</div>
        <div className="buttons">
          <Row updateDataObj={this.updateDataObj} first="AC" second="+/-" third="%" fourth="÷" />
          <Row updateDataObj={this.updateDataObj} first="7" second="8" third="9" fourth="x" />
          <Row updateDataObj={this.updateDataObj} first="4" second="5" third="6" fourth="-" />
          <Row updateDataObj={this.updateDataObj} first="1" second="2" third="3" fourth="+" />
          <Row updateDataObj={this.updateDataObj} first="0" second="." third="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
