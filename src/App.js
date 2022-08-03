import React from 'react';
// import Calculator from './components/Calculator';
import CalculatorHook from './components/CalculatorHooks';
import './styles/App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <CalculatorHook />
      </div>
    );
  }
}

export default App;
