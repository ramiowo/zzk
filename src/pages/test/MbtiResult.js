import { useLocation } from "react-router-dom";
import TestResult from "./data/TestResult";
import styled from "styled-components";
import resultheart from "../../imgs/resultheart.svg"

const Con = styled.div`
  width: 100%;
  max-width: 393px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  h4 {
    margin-top: 40px;
    font-size: 26px;
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
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 26px;
  }

  h3{
    font-size: 18px;
   line-height: 30px;
  }

  img{
    position: absolute;
    z-index: -1;
    top: 50px;
  }
`;

const MbtiResult = () => {
  const location = useLocation();
  const { answers } = location.state; // Test 컴포넌트에서 전달받은 점수
  const mbtiData = TestResult();

  // MBTI 결과 계산
  const mbti =
    (answers.E >= answers.I ? "E" : "I") +
    (answers.S >= answers.N ? "S" : "N") +
    (answers.T >= answers.F ? "T" : "F") +
    (answers.J >= answers.P ? "J" : "P");

  // 결과 데이터 찾기
  const result = mbtiData.find((item) => item.type === mbti);

  return (
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
      <h3>잘 맞는 MBTI:</h3>
      <h3>{result.compatibleMBTI.join(", ")}</h3>
    </Con>
  );
};

export default MbtiResult;
