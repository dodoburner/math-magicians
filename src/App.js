import React from 'react';
import Home from './components/Home';
import CalculatorPage from './components/CalculatorPage';
import './styles/App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Home />
        <CalculatorPage />
      </div>
    );
  }
}

export default App;
