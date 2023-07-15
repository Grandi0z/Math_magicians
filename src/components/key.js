import React from 'react';
import PropTypes from 'prop-types';

export default function Key(props) {
  const { chart } = props;
  return (
    <div className="key-container">
      <button className="key-value" type="button">
        {chart}
      </button>
    </div>
  );
}

Key.propTypes = {
  chart: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
};

Key.defaultProps = {
  chart: 'text',
};
