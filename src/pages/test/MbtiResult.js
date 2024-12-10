import { useLocation } from "react-router-dom";
import TestResult from "./data/TestResult";

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
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>당신의 MBTI는 {result.type}입니다!</h1>
      <h2>{result.nickname}</h2>
      <p>{result.description}</p>
      <h3>키워드:</h3>
      <ul>
        {result.keywords.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
      </ul>
      <h3>잘 맞는 MBTI:</h3>
      <p>{result.compatibleMBTI.join(", ")}</p>
    </div>
  );
};

export default MbtiResult;
