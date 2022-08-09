import React from 'react';
import Home from './components/Home';
import CalculatorPage from './components/CalculatorPage';
import Quote from './components/Quote';
import './styles/App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Home />
        <CalculatorPage />
        <Quote />
      </div>
    );
  }
}

export default App;
