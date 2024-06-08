import React, { useState } from 'react';

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
    setSelectedOptions([]); // Сбрасываем выбранные ответы при переходе к следующему вопросу
    checkAnswer();
  };

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                name="answer"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Следующий вопрос</button>
    </div>
  );
};

export default MultipleChoiceQuestion;