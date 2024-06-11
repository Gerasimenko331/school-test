import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography'; // Импортируем компонент Typography из Material-UI

type MultipleChoiceQuestionProps = {
  question: string;
  options: string[];
  correctAnswers: string[];
  handleNextQuestion: (isCorrect: boolean) => void;
};

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({ question, options, correctAnswers, handleNextQuestion }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  };

  const checkAnswer = () => {
    const isCorrect = selectedOptions.every(option => correctAnswers.includes(option))
      && correctAnswers.length === selectedOptions.length;

    handleNextQuestion(isCorrect);
  };

  const handleNext = () => {
    setSelectedOptions([]);
    checkAnswer();
  };

  return (
    <div>
      <Typography variant="h5">{question}</Typography> {/* Добавляем стиль для заголовка */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {options.map((option, index) => (
          <li key={index}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox
                checked={selectedOptions.includes(option)}
                onChange={handleOptionChange}
                value={option}
              />
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>
      <Button variant="contained" onClick={handleNext}>Следующий вопрос</Button>
    </div>
  );
};

export default MultipleChoiceQuestion;