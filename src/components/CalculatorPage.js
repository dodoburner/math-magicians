import React from "react";
import Header from './Header';
import Calculator from "./Calculator";
import '../styles/calculator.css';

function CalculatorPage() {
  return (
    <div>
      <Header />
      <div className="calc-page-content">
        <h1>Let&apos;s do some math!</h1>
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorPage;
