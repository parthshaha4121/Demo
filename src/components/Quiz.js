
import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'High-level Text Markup Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
      correctAnswer: 'Hyper Text Markup Language',
    },
    {
      question: 'Which of the following is a programming language?',
      options: ['HTML', 'CSS', 'JavaScript', 'XML'],
      correctAnswer: 'JavaScript',
    },
    {
      question: 'What is the capital of JavaScript?',
      options: ['Java City', 'Scriptburg', 'None', 'Codersville'],
      correctAnswer: 'None',
    },
    {
      question: 'What does CSS stand for?',
      options: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
      correctAnswer: 'Cascading Style Sheets',
    },
    {
      question: 'Which language is commonly used for server-side programming?',
      options: ['JavaScript', 'Python', 'Java', 'PHP'],
      correctAnswer: 'PHP',
    },
  ];

  const handleAnswerClick = (selectedOption) => {
    setSelectedAnswer(selectedOption);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      
      alert(`Quiz Completed! Your Score: ${score}/${questions.length}`);
      
    }
  };

  return (
    <div style={quizContainer}>
      <h2 style={headingStyle}>Programming Quiz</h2>
      <div style={questionContainer}>
        <p style={questionStyle}>{questions[currentQuestion].question}</p>
        <div style={optionsContainer}>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              style={{
                ...optionStyle,
                backgroundColor: selectedAnswer === option ? '#3498db' : '#f5f5f5',
                color: selectedAnswer === option ? '#fff' : '#333',
              }}
              onClick={() => handleAnswerClick(option)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <button style={nextButtonStyle} onClick={handleNextQuestion} disabled={selectedAnswer === null}>
        Next Question
      </button>
    </div>
  );
};

const quizContainer = {
  width: '80%',
  margin: 'auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  marginTop: '20px',
  textAlign: 'center',
};

const headingStyle = {
  color: '#2c3e50',
};

const questionContainer = {
  marginTop: '20px',
};

const questionStyle = {
  fontSize: '18px',
  marginBottom: '15px',
  color: '#333',
};

const optionsContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const optionStyle = {
  margin: '5px',
  padding: '10px',
  width: '200px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  cursor: 'pointer',
};

const nextButtonStyle = {
  marginTop: '20px',
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#3498db',
  color: '#fff',
  cursor: 'pointer',
};

export default Quiz;
