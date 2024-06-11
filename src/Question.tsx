import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio'; // Импортируем компонент Radio из Material-UI
import RadioGroup from '@mui/material/RadioGroup'; // Импортируем компонент RadioGroup из Material-UI

type QuestionProps = {
  question: string;
  options: string[];
  correctAnswer: string;
  handleNextQuestion: (isCorrect: boolean) => void;
};

const Question: React.FC<QuestionProps> = ({ question, options, correctAnswer, handleNextQuestion }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    const checkAnswer = () => {
        if (selectedOption === correctAnswer) {
            handleNextQuestion(true);
        } else {
            handleNextQuestion(false);
        }
    };

    const handleNext = () => {
        setSelectedOption(null);
        checkAnswer();
    };

    return (
        <div>
            <h3>{question}</h3>
            <RadioGroup value={selectedOption} onChange={handleOptionChange}> {/* Добавляем RadioGroup */}
                {options.map((option, index) => (
                    <div key={index}>
                        <Radio value={option} /> {/* Добавляем Radio для каждой опции */}
                        <label>{option}</label>
                    </div>
                ))}
            </RadioGroup>
            <Button variant="contained" onClick={handleNext}>Следующий вопрос</Button>
        </div>
    );
};

export default Question;