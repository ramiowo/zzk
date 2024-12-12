import React from "react";
import { NameData } from "./data/NameData";
import { useLocation } from "react-router";

const TotalResult = () => {
  const location = useLocation();
  const { myName, partnerName } = location.state || {};

  // 궁합 계산
  const { score, message } = NameData(myName, partnerName);
  // console.log(myName);
  return (
    <div style={{ padding: "20px" }}>
      <h1>결과</h1>
      <p>
        나: {myName} | 상대: {partnerName}
      </p>
      <p>궁합 점수: {score}점</p>
      <p>{message}</p>
    </div>
  );
};

export default TotalResult;
