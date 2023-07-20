import React, { useState } from 'react';
import Elements from './elements';
import calculate from '../logic/calculate';
import './Calculator.css';

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

const Calculator = () => {
  const [output, setOutput] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, next, operation } = output;

  const handleClick = (e) => {
    const values = e.target.textContent;
    setOutput(calculate(output, values));
  };
  return (
    <div className="calc-container">
      <div className="output">{next || total || operation || 0}</div>
      {calcFigures.map((number) => (
        <Elements number={number} key={number} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Calculator;
