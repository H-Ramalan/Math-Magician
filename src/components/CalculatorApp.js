import React from 'react';
import Nav from './nav';
import Calculator from './Calculator';

const CalculatorApp = () => (
  <div>
    <Nav />
    <main>
      <h2 className="math">Lets Do Some Math!</h2>
      <Calculator />
    </main>
  </div>
);

export default CalculatorApp;
