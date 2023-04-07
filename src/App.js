import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<React.Fragment><Home /></React.Fragment>} />
          <Route path="/quiz" element={<React.Fragment><Quiz /></React.Fragment>} />
          <Route path="/results" element={<React.Fragment><Results /></React.Fragment>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
