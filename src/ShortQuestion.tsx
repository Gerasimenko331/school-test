import React from 'react';

interface ShortQuestionProps {
  question: string;
  answer: string;
  handleNextQuestion: (isCorrect: boolean) => void;
}

const ShortQuestion: React.FC<ShortQuestionProps> = ({ question, answer, handleNextQuestion }) => {
  // Дополните компонент ShortQuestion с JSX для отображения вопроса с коротким ответом

  const submitAnswer = (userAnswer: string) => {
    const isCorrect = userAnswer.toLowerCase() === answer.toLowerCase();
    handleNextQuestion(isCorrect);
  };

  return (
    <div>
      <p><strong>Вопрос: </strong>{question}</p>
      <input type="text" placeholder="Введите ответ" />
      <button onClick={() => submitAnswer('Введенный ответ')}>Отправить ответ</button>
    </div>
  );
};

export default ShortQuestion;