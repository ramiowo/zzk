import React from "react";
import { useLocation } from "react-router-dom"; // useLocation 훅 사용

const Result = () => {
  const location = useLocation();
  const { result } = location.state || {}; // 전달된 result 받기

  // 전달된 result 값 확인
  console.log("Received result:", result);

  if (!result) {
    return <p>결과를 계산할 수 없습니다.</p>; // result가 없으면 메시지 표시
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>궁합 결과</h1>

      <div>
        <h3>이름 궁합 점수: {result.score}점</h3>
        <p>{result.message}</p>
      </div>
    </div>
  );
};

export default Result;
