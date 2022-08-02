/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import '../styles/calculator.css';

class Row extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      first, second, third, fourth, updateDataObj
    } = this.props;

    return (
      <div className="row">

        <div onClick={updateDataObj} className="button">{first}</div>

        <div onClick={updateDataObj} className="button">{second}</div>

        <div onClick={updateDataObj} className="button">{third}</div>

        {fourth ? <div onClick={updateDataObj} className="button">{fourth}</div> : null}

      </div>
    );
  }
}

Row.defaultProps = {
  fourth: '',
};

Row.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string,
  updateDataObj: PropTypes.func.isRequired
};

export default Row;
