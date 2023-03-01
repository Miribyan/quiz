import React, { useState } from "react";
import ReactDOM from "react-dom";
import questions from "./questions";
import "./index.css";


function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);

  function handleAnswerChange(option) {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = option;
    setSelectedAnswers(newSelectedAnswers);
  }

  

  function handleNextQuestionClick() {
    const currentAnswer = selectedAnswers[currentQuestion];
    if (currentAnswer !== undefined) {
      const currentScore = questions[currentQuestion].answers.find(
        (answer) => answer.option === currentAnswer
      ).isCorrect
        ? 1
        : 0;
      setScore(score + currentScore);
      setCurrentQuestion(currentQuestion + 1);
    }
  }


  return (
    <div className="Quiz">
      <h1>Round {questions[currentQuestion].round}</h1>
      <div className="Questions">
      <h2>Question {currentQuestion + 1}</h2>
      <p>{questions[currentQuestion].question}</p>
      <ul>
        {questions[currentQuestion].answers.map((answer, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                className="checkbox_1"
                checked={selectedAnswers[currentQuestion] === answer.option}
                onChange={() => handleAnswerChange(answer.option)}
              />
              {answer.option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestionClick}>Next question</button>
      {currentQuestion === questions.length && (
        <p>Your score is {score}/{questions.length}</p>
      )}
      </div>
    </div>
  );
}

export default Quiz;
