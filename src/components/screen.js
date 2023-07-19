import React from 'react';
import PropTypes from 'prop-types';

const Screen = (props) => {
  const { value } = props;
  return (
    <input className="screen" type="text" value={value} />
  );
};

Screen.defaultProps = {
  value: '0',
};

Screen.propTypes = {
  value: PropTypes.string,
};

export default Screen;
