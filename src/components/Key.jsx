import React from 'react';
import PropTypes from 'prop-types';

export default function Key(props) {
  const { keyName, onClick } = props;
  return (
    <div className="key-container">
      <button className="key-value" type="button" onClick={onClick}>
        {keyName}
      </button>
    </div>
  );
}

Key.propTypes = {
  keyName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number]),
  onClick: PropTypes.func.isRequired,
};

Key.defaultProps = {
  keyName: 'text',
};
