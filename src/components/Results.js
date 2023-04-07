import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location, navigate]);

  const restartQuiz = () => {
    navigate('/');
  };

  return (
    <div className="results">
      <h2>Your Score: {score} / {totalQuestions}</h2>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default Results;
