import React from 'react';
import PropTypes from 'prop-types';
import '../styles/calculator.css';

class Row extends React.Component {
  render() {
    const {
      first, second, third, fourth,
    } = this.props;

    return (
      <div className="row">
        <div className="button">{first}</div>
        <div className="button">{second}</div>
        <div className="button">{third}</div>
        {fourth ? <div className="button">{fourth}</div> : null}
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
