import React from 'react';
import PropTypes from 'prop-types';
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

Row.defaultProps = {
  fourth: '',
};

Row.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string,
};

export default Row;
