import React, { useState } from 'react';

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
      setSelectedOption(null); // Очищаем выбранный ответ при переходе к следующему вопросу
      checkAnswer();
    };
  
    return (
      <div>
        <h3>{question}</h3>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label>{option}</label>
            </li>
          ))}
        </ul>
        <button onClick={handleNext}>Следующий вопрос</button>
      </div>
    );
  };

export default Question;
