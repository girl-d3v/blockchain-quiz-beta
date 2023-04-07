import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Blockchain Fundamentals Quiz</h1>
          <p className="card-text">
            Test your knowledge of blockchain fundamentals with this fun quiz!
          </p>
          <Link to="/quiz" className="btn btn-primary">
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
