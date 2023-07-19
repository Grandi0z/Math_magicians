import React from 'react';
import PropTypes from 'prop-types';
import Key from './Key.js';

const KeyBoard = ({ data, setData, calculate }) => {
  const handleOnClick = (e) => {
    const keyName = e.target.innerText;
    const newData = calculate(data, keyName);
    setData(newData);
  };

  return (
    <div className="intKeys-container">
      <Key keyName="AC" onClick={handleOnClick} />
      <Key keyName="+/-" onClick={handleOnClick} />
      <Key keyName="%" onClick={handleOnClick} />
      <Key keyName="÷" onClick={handleOnClick} />
      <Key keyName="7" onClick={handleOnClick} />
      <Key keyName="8" onClick={handleOnClick} />
      <Key keyName="9" onClick={handleOnClick} />
      <Key keyName="x" onClick={handleOnClick} />
      <Key keyName="4" onClick={handleOnClick} />
      <Key keyName="5" onClick={handleOnClick} />
      <Key keyName="6" onClick={handleOnClick} />
      <Key keyName="-" onClick={handleOnClick} />
      <Key keyName="1" onClick={handleOnClick} />
      <Key keyName="2" onClick={handleOnClick} />
      <Key keyName="3" onClick={handleOnClick} />
      <Key keyName="+" onClick={handleOnClick} />
      <Key keyName="0" onClick={handleOnClick} />
      <Key keyName="." onClick={handleOnClick} />
      <Key keyName="=" onClick={handleOnClick} />
    </div>
  );
};

KeyBoard.propTypes = {
  data: PropTypes.shape({
    total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    next: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    operation: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  setData: PropTypes.func.isRequired,
  calculate: PropTypes.func.isRequired,
};

export default KeyBoard;
