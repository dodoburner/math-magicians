import React from 'react';
import Home from './components/Home';
import './styles/App.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
