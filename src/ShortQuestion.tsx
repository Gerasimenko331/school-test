
import React, { useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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
      <h3>{question}</h3>
      <TextField inputRef={inputRef} variant="outlined" label="Ответ" />
      <div style={{ marginTop: '20px' }}> {/* Добавляем отступ в 10 пикселей */}
        <Button variant="contained" onClick={handleAnswerClick}>Ответить</Button>
      </div>
    </div>
  );
};

export default ShortQuestion;