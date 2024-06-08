import React, { useState } from 'react';
import Question from './Question';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';

const TestComponent: React.FC = () => {
  const questions = [
    {
      question: "Первый вопрос",
      options: ['A', 'B', 'C'],
      correctAnswers: ['A']
    },
    {
      question: "Второй вопрос",
      options: ['X', 'Y', 'Z'],
      correctAnswers: ['X', 'Y']
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  return (
    <div>
      {currentQuestionIndex < questions.length && currentQuestionIndex >= 0 && (
        <>
          {currentQuestionIndex === 0 ? (
            <Question
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              correctAnswer={questions[currentQuestionIndex].correctAnswers[0]}
              handleNextQuestion={handleNextQuestion}
            />
          ) : (
            <MultipleChoiceQuestion
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              correctAnswers={questions[currentQuestionIndex].correctAnswers}
              handleNextQuestion={handleNextQuestion}
            />
          )}
        </>
      )}
      {currentQuestionIndex === questions.length && (
        <div>
          <h1>Тест завершен</h1>
          <p>Правильных ответов: {score}</p>
        </div>
      )}
    </div>
  );
};

export default TestComponent;