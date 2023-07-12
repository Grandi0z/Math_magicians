import React from 'react';
import PropTypes from 'prop-types';
import Key from './key';

function IntKeys() {
  return (
    <div className="intKeys-container">
      <Key chart="AC" />
      <Key chart="+/-" />
      <Key chart="%" />
      <Key chart="÷" />
      <Key chart={7} />
      <Key chart={8} />
      <Key chart={9} />
      <Key chart="*" />
      <Key chart={4} />
      <Key chart={5} />
      <Key chart={6} />
      <Key chart="-" />
      <Key chart={1} />
      <Key chart={2} />
      <Key chart={3} />
      <Key chart="+" />
      <Key chart={0} />
      <Key chart="." />
      <Key chart="=" />
    </div>
  );
}

function Screen(props) {
  const { value } = props;
  return (
    <input className="screen" type="text" value={value} />
  );
}

Screen.defaultProps = {
  value: '0',
};

Screen.propTypes = {
  value: PropTypes.string,
};
function Calculator() {
  return (
    <div>
      <Screen value={0} />
      <IntKeys />
    </div>
  );
}

export default Calculator;
