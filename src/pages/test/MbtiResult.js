import { Link, Navigate, useLocation } from "react-router-dom";
import TestResult from "./data/TestResult";
import styled from "styled-components";
import resultheart from "../../imgs/resultheart.svg";
import { Helmet } from "react-helmet-async";

const Container = styled.section`
  width: 100%;
  max-width: 393px;

  margin: 0 auto;
  padding-bottom: 30px;
`;

const Con = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h4 {
    margin-top: 40px;
    font-size: 23px;
    margin-bottom: 100px;
    color: white;
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
  }
  h1 {
    color: #c55972;
    margin-top: 15px;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 150px;
  }

  div {
    height: 300px;
    text-align: center;
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    li {
      margin-right: 5px;
    }
    color: #c55972;
    font-size: 14px;
    margin-bottom: 10px;
  }

  p {
    padding: 0 20px;
    font-size: 16px;
    margin-bottom: 40px;
    line-height: 26px;
  }

  h3 {
    font-size: 18px;
    line-height: 30px;
    opacity: 0.5;
    margin-bottom: 5px;
  }

  h5 {
    font-size: 18px;
    color: #c55972;
    font-weight: bold;
    opacity: 0.8;
  }

  img {
    position: absolute;
    z-index: -1;
    top: 50px;
    opacity: 0.8;
    filter: blur(2px);
  }
`;

const ReButton = styled.div`
  margin-top: 30px;

  width: 100%;
  height: 60px;
  background-color: #eeadbd;
  border-radius: 50px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;

  a {
    text-decoration: none;
    color: #f5f5f5;
    font-weight: 500;
  }
`;

const MbtiResult = () => {
  const location = useLocation();
  const { answers } = location.state;
  const mbtiData = TestResult();

  const mbti =
    (answers.E >= answers.I ? "E" : "I") +
    (answers.S >= answers.N ? "S" : "N") +
    (answers.T >= answers.F ? "T" : "F") +
    (answers.J >= answers.P ? "J" : "P");

  const result = mbtiData.find((item) => item.type === mbti);

  return (
    <>
      <Helmet>
        <title>MBTI결과 | 짝짝꿍 </title>
      </Helmet>
      <Container>
        <Con>
          <img src={resultheart} alt="bgheart" />
          <h4>나의 MBTI는</h4>
          <h2>{result.nickname}</h2>
          <h1>{result.type}</h1>
          <ul>
            {result.keywords.map((keyword, index) => (
              <li key={index}>#{keyword}</li>
            ))}
          </ul>
          <p>{result.description}</p>
          <h3>잘 맞는 MBTI</h3>
          <h5>{result.compatibleMBTI.join(", ")}</h5>
        </Con>
        <ReButton>
          <Link to={"/"}>다시 검사하기</Link>
        </ReButton>
      </Container>
    </>
  );
};

export default MbtiResult;
