import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "./data/questions";
import styled from "styled-components";

const Con = styled.div`
  width: 100%;
  max-width: 393px;
  margin: 0 auto;
`;

const Test = () => {
  const [answers, setAnswers] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (type) => {
    setAnswers((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/mbtiresult", { state: { answers } });
    }
  };

  return (
    <Con>
      <h2>
        질문 {currentQuestion + 1} / {questions.length}
      </h2>
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option.type)}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
        >
          {option.answer}
        </button>
      ))}
    </Con>
  );
};

export default Test;
