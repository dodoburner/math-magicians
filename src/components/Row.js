/* eslint-disable */
import React from 'react';

class Row extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row">
        <div>{this.props.first}</div>
        <div>{this.props.second}</div>
        <div>{this.props.third}</div>
        {this.props.fourth ? <div>{this.props.fourth}</div> : null}
      </div>
    );
  }
}

export default Row;
