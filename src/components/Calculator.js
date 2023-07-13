import React from 'react';
import Elements from './elements';

const calcFigures = [
  'AC',
  '+/-',
  '%',
  '\u00F7',
  '7',
  '8',
  '9',
  'x',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
];

const Calculator = () => (
  <div className="calc-container">
    <div className="result">0</div>
    {calcFigures.map((number) => (
      <Elements number={number} key={number} />
    ))}
  </div>
);

export default Calculator;
