import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import questions from "./questions";
import "./index.css";




function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [limit, setLimit] = useState(questions[currentQuestion].timeLimit)

  function handleAnswerChange(option) {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = option;
    setSelectedAnswers(newSelectedAnswers);
  }



  function handleNextQuestion() {
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
    } else {
      setScore(score);
      if (questions.length > currentQuestion + 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else { setIsComplete(true) };
    }
  }


  useEffect(() => {
    const timer =
      limit > 0 &&
      setInterval(function () {
        setLimit(Limit - 1)
      }, 1000);
    if (limit === 0) { handleNextQuestion() }
    return () => clearInterval(timer)
  }, [limit])

  useEffect(() => {
    setLimit(questions[currentQuestion].timeLimit);
  }, [currentQuestion])



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
          <div className="header">
            <h2>Вопрос {currentQuestion + 1}</h2>
            <p className="questionValue">{questions[currentQuestion].question}</p>
          </div>
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
        </div>
        <div className="componentFooter">
         <div className="nextButton">
           <button onClick={handleNextQuestion}>Next question</button>
           </div>
           <div className="timer"> Осталось {Limit} с.</div>
        </div>
      </div>
    ));
}

export default Quiz;
