import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "./data/questions";
import styled from "styled-components";
import heart from "../../imgs/heart.svg";

const Con = styled.div`
  width: 100%;
  max-width: 393px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: white;
    margin-bottom: 40px;
  }
  img {
    margin-bottom: 40px;
  }
  p {
    margin-bottom: 100px;
    font-size: 22px;
    font-weight: 400;
    text-align: center;
  }

  button {
    all: unset;
    width: 100%;
    height: 40px;
    border-radius: 50px;
    border: 1px solid white;
    font-family: "SCDream";
    font-size: 50px;
    padding: 0 20px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    transition: background-color 0.3s ease;

    ${(props) =>
      props.isClicked &&
      `
      background-color: #EFC2CD;
    `}
  }
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
  const [clickedButton, setClickedButton] = useState(null);
  const navigate = useNavigate();

  const handleAnswer = (type) => {
    setAnswers((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
    setClickedButton(type);
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
      <img src={heart} alt="heart" />
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleAnswer(option.type)}
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
          isClicked={clickedButton === option.type}
        >
          {option.answer}
        </button>
      ))}
    </Con>
  );
};

export default Test;
