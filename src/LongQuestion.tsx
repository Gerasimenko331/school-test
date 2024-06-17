import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      <Typography variant="h5" style={{ marginBottom: '10px' }}>{question}</Typography>
      <textarea
        value={answer}
        onChange={handleAnswerChange}
        rows={6}
        cols={50}
        placeholder="Напишите ответ здесь"
      />
      <div style={{ marginTop: '26px' }}>
      <Button variant="contained" onClick={handleNext}>Следующий вопрос</Button> {/* Добавим кнопку для перехода к следующему вопросу */}
      </div>
    </div>
  );
};

export default LongQuestion;