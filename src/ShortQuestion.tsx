import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'; // Импортируем компонент Typography из Material-UI

interface ShortQuestionProps {
  question: string;
  answer: string;
  handleNextQuestion: (isCorrect: boolean) => void;
}

const ShortQuestion: React.FC<ShortQuestionProps> = ({ question, answer, handleNextQuestion }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAnswerClick = () => {
    if (inputRef.current) {
      const userAnswer = inputRef.current.value.trim().toLowerCase();
      const correctAnswer = answer.trim().toLowerCase();

      if (userAnswer === correctAnswer) {
        handleNextQuestion(true);
      } else {
        handleNextQuestion(false);
      }
    }
  };

  return (
    <div>
      <Typography variant="h5" style={{ marginBottom: '10px' }}>{question}</Typography> {/* Добавляем отступ снизу у заголовка */}
      <TextField inputRef={inputRef} variant="outlined" label="Ответ" style={{ marginTop: '10px' }} /> {/* Добавляем отступ сверху для TextField */}
      <div style={{ marginTop: '26px' }}>
        <Button variant="contained" onClick={handleAnswerClick}>Ответить</Button>
      </div>
    </div>
  );
};

export default ShortQuestion;
