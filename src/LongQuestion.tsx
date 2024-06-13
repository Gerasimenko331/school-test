import React, { useState } from 'react';

interface QuestionProps {
  question: string;
  handleNextQuestion: (isCorrect: boolean) => void;
}

const LongQuestion: React.FC<QuestionProps> = ({ question, handleNextQuestion }) => {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value);
  };

  // Функция для передачи ответа на следующий вопрос
  const handleNext = () => {
    // Добавьте здесь логику проверки ответа и вызовите handleNextQuestion с соответствующим параметром
    handleNextQuestion(true); // Пример вызова с правильным ответом (для демонстрации)
  }

  return (
    <div>
      <h2>{question}</h2>
      <textarea
        value={answer}
        onChange={handleAnswerChange}
        rows={6}
        cols={50}
        placeholder="Enter your answer here"
      />
      <button onClick={handleNext}>Next Question</button> {/* Добавим кнопку для перехода к следующему вопросу */}
    </div>
  );
};

export default LongQuestion;