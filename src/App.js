import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Quote from './components/Quote';
import HomePage from './components/HomePage';
import CalculatorApp from './components/CalculatorApp';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/calculator" element={<CalculatorApp />} />
    <Route path="/quote" element={<Quote />} />
  </Routes>
);

export default App;
