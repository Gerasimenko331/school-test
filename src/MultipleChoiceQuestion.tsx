import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

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
      <h3>{question}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}> {/* Убираем маркеры и отступы для списка */}
        {options.map((option, index) => (
          <li key={index}>
            <label style={{ display: 'flex', alignItems: 'center' }}> {/* Добавляем стили для лейбла и чекбокса */}
              <Checkbox
                checked={selectedOptions.includes(option)}
                onChange={handleOptionChange}
                value={option}
              />
              <span>{option}</span> {/* Помещаем текст опции в отдельный элемент для стилизации */}
            </label>
          </li>
        ))}
      </ul>
      <Button variant="contained" onClick={handleNext}>Следующий вопрос</Button>
    </div>
  );
};

export default MultipleChoiceQuestion;