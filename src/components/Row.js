import React from 'react';
import PropTypes from 'prop-types';
import '../styles/calculator.css';

class Row extends React.PureComponent {
  render() {
    const {
      first, second, third, fourth, updateDataObj,
    } = this.props;

    return (
      <div className="row">
        <button type="button" onClick={updateDataObj} className="button">
          {first}
        </button>
        <button type="button" onClick={updateDataObj} className="button">
          {second}
        </button>
        <button type="button" onClick={updateDataObj} className="button">
          {third}
        </button>
        {fourth ? (
          <button type="button" onClick={updateDataObj} className="button">
            {fourth}
          </button>
        ) : null}
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
  updateDataObj: PropTypes.func.isRequired,
};

export default Row;
