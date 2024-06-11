import React, { useState, useEffect } from "react";
import Question from "./Question";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";
import ShortQuestion from "./ShortQuestion";
import { Button, Typography } from "@mui/material";
import "./TestComponent.css";

const TestComponent: React.FC = () => {
  const questions = [
    {
      question: "Первый вопрос",
      options: ["A", "B", "C"],
      correctAnswers: ["A"],
    },
    {
      question: "Второй вопрос",
      options: ["X", "Y", "Z"],
      correctAnswers: ["X", "Y"],
    },
    {
      question: "Третий вопрос",
      answer: "123",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    parseInt(localStorage.getItem("currentQuestionIndex") || "0")
  );
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score") || "0")
  );
  const [isTestComplete, setIsTestComplete] = useState(false);

  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleRestartTest = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsTestComplete(false);
    localStorage.clear(); // Очищаем сохраненные данные при рестарте
  };

  useEffect(() => {
    localStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
    localStorage.setItem("score", score.toString());

    if (currentQuestionIndex === questions.length) {
      setIsTestComplete(true);
    }
  }, [currentQuestionIndex, score]);

  return (
    <div className="test-container">
      {currentQuestionIndex < questions.length && currentQuestionIndex >= 0 && (
        <>
          {currentQuestionIndex === 0 ? (
            <Question
              question={questions[currentQuestionIndex]?.question}
              options={questions[currentQuestionIndex]?.options || []}
              correctAnswer={
                questions[currentQuestionIndex]?.correctAnswers?.[0] || ""
              }
              handleNextQuestion={handleNextQuestion}
            />
          ) : currentQuestionIndex === 1 ? (
            <MultipleChoiceQuestion
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options || []}
              correctAnswers={
                questions[currentQuestionIndex].correctAnswers || []
              }
              handleNextQuestion={handleNextQuestion}
            />
          ) : (
            <ShortQuestion
              question={questions[currentQuestionIndex].question}
              answer={questions[currentQuestionIndex].answer || ""}
              handleNextQuestion={handleNextQuestion}
            />
          )}
        </>
      )}

      {isTestComplete && (
        <div>
          <Typography variant="h4" className="test-complete-heading">
            Тест завершен
          </Typography>{" "}
          {/* Добавляем стиль для заголовка "Тест завершен" */}
          <div className="test-score">
            <Typography variant="h6">
            Правильных ответов: {score}
          </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleRestartTest}
          >
            Начать тест заново
          </Button>
        </div>
      )}
    </div>
  );
};

export default TestComponent;
