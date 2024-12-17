import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import questions from "./data/questions";
import FilledHeart from "./FilledHeart";

const Con = styled.div`
  width: 100%;
  max-width: 393px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 16px;

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: white;
    margin-bottom: 50px;
    margin-top: 30px;
  }

  p {
    margin-bottom: 60px;
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    word-break: keep-all;
    line-height: 26px;
    margin-top: 40px;
  }
`;

// 버튼 컴포넌트: 조건부 스타일링
const StyledButton = styled.button`
  all: unset;
  width: 100%;
  height: 65px;
  border-radius: 50px;
  border: 1px solid white;
  font-family: "SCDream";
  font-size: 16px;
  text-align: center;
  background-color: ${(props) =>
    props.isFirst ? "#EFC2CD" : "rgba(255, 255, 255, 0.5)"};
  margin: 10px;
`;

const Test = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (type) => {
    setAnswers((prev) => ({
      ...prev,
      [type]: (prev[type] || 0) + 1,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate("/mbtiresult", { state: { answers } });
    }
  };

  return (
    <Con>
      <h2>
        질문 {currentQuestion + 1} / {questions.length}
      </h2>
      <FilledHeart progress={progress} />
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].options.map((option, index) => (
        <StyledButton
          key={index}
          isFirst={index === 0}
          onClick={() => handleAnswer(option.type)}
        >
          {option.answer}
        </StyledButton>
      ))}
    </Con>
  );
};

export default Test;
