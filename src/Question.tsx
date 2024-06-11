import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography'; 
import "./Question.css";

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
            <Typography variant="h5">{question}</Typography>
            <div className='radio-group'>
            <RadioGroup value={selectedOption} onChange={handleOptionChange}>
                {options.map((option, index) => (
                    <div key={index}>
                        <Radio value={option} />
                        <label>{option}</label>
                    </div>
                ))}
            </RadioGroup>
            </div>
            <Button variant="contained" onClick={handleNext}>Следующий вопрос</Button>
        </div>
    );
};

export default Question;