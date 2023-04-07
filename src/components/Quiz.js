import React, { useState } from 'react';
import questions from '../questions';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelection = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctIndex) {
      setScore((prevScore) => prevScore + 1);
    }
  
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScore((prevScore) => {
        const finalScore = prevScore;
        navigate('/results', { state: { score: finalScore, totalQuestions: questions.length } });
        return finalScore;
      });
    }
  };  
  

  const navigate = useNavigate();

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-body'>
          <h2 className='card-title'>{questions[currentQuestion].question}</h2>
          <div className='list-group'>
            {questions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                className={`list-group-item list-group-item-action ${
                  selectedAnswer === index ? 'active' : ''
                }`}
                onClick={() => handleAnswerSelection(index)}
              >
                {answer}
              </button>
            ))}
          </div>
          <button
            className='btn btn-primary mt-3'
            onClick={handleAnswerSelection}
            disabled={selectedAnswer === null}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
