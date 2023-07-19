import React, { useState } from 'react';
import calculate from '../logic/calculate';
import KeyBoard from './keyBoard';
import Screen from './screen';
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
    <div>
      <Screen value={displayOnScreen(calculateData)} />
      <KeyBoard data={calculateData} setData={setCalculateData} calculate={calculate} />
    </div>
  );
}

export default Calculator;
