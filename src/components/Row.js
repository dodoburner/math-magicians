import React from 'react';
import '../styles/calculator.css';

class Row extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="button">{this.props.first}</div>
        <div className="button">{this.props.second}</div>
        <div className="button">{this.props.third}</div>
        {this.props.fourth ? <div className="button">{this.props.fourth}</div> : null}
      </div>
    );
  }
}

export default Row;
