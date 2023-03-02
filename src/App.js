import React, { useState } from "react";
import ReactDOM from "react-dom";
import questions from "./questions";
import "./index.css";


function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(9);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
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
      if (questions.length > currentQuestion + 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else { setIsComplete(true) };
    }
  }


  return (
    (isComplete) ? (
      <div className="Quiz">
        <h1>Так быстро?</h1>
        <h2>Ваш результат {score}/{questions.length}</h2>
      </div>
    ) : (
      <div className="Quiz">
        <h1>{questions[currentQuestion].round}</h1>
        <div className="Questions">
          <h2>Вопрос {currentQuestion + 1}</h2>
          <p className="questionValue">{questions[currentQuestion].question}</p>
          <ul className="list">
            {questions[currentQuestion].answers.map((answer, index) => (
              <li key={index} className="list">
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
        </div>
      </div>
    ));
}

export default Quiz;
