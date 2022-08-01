import React from 'react';
import Calculator from './components/Calculator';
import './styles/App.css';

class App extends React.Component() {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
