import { useLocation } from "react-router-dom";
import TestResult from "./data/TestResult";
import styled from "styled-components";

const Con = styled.div`
  width: 100%;
  max-width: 393px;
  margin: 0 auto;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  h4 {
    font-size: 16px;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
  h1 {
    color: #c55972;
    margin-top: 15px;
    font-size: 40px;
    font-weight: 700;
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
    font-size: 20px;
    margin-bottom: 30px;
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
      <h4>나의 MBTI는</h4>
      <h2>{result.nickname}</h2>
      <h1>{result.type}</h1>
      <div>이미지</div>
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
