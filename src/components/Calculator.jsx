import React, { useState } from 'react';
import calculate from '../logic/calculate';
import KeyBoard from './KeyBoard';
import Screen from './Screen';
import displayOnScreen from './functions/functions';

function Calculator() {
  const [calculateData, setCalculateData] = useState(
    {
      total: '',
      next: '',
      operator: '',
    },
  );
  return (
    <div className="calculator">
      <Screen value={displayOnScreen(calculateData)} />
      <KeyBoard data={calculateData} setData={setCalculateData} calculate={calculate} />
    </div>
  );
}

export default Calculator;
