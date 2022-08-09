import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import CalculatorPage from './components/CalculatorPage';
import Quote from './components/Quote';
import './styles/App.css';

class App extends React.PureComponent {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Calculator" element={<CalculatorPage />} />
            <Route path="Quotes" element={<Quote />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
