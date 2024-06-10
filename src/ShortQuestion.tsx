
import React, { useState, useRef } from 'react';

interface ShortQuestionProps {
  question: string;
  answer: string;
  handleNextQuestion: (isCorrect: boolean) => void;
}

const ShortQuestion: React.FC<ShortQuestionProps> = ({ question, answer, handleNextQuestion }) => {
  const inputRef = useRef<HTMLInputElement>(null); // Указываем тип для ref

  const handleAnswerClick = () => {
    if (inputRef.current) {
      const userAnswer = inputRef.current.value.trim().toLowerCase();
      const correctAnswer = answer.trim().toLowerCase();
  
      if (userAnswer === correctAnswer) {
        handleNextQuestion(true); // Засчитываем правильный ответ
      } else {
        handleNextQuestion(false); // Не засчитываем неправильный ответ
      }
    }
  };

  return (
    <div>
      <h3>{question}</h3>
      <input type="text" ref={inputRef} />
      <button onClick={handleAnswerClick}>Ответить</button>
    </div>
  );
};

export default ShortQuestion;