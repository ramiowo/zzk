import React, { useState } from "react";
import { NameData } from "./data/NameData";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getZodiac, StarData } from "./data/Star";

const Container = styled.section`
  width: 100%;
  max-width: 393px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const TotalScore = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 28px;
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
    color: #333;

    &.active {
      color: #ffb6c1;
      border-bottom: 2px solid #ffb6c1;
    }
  }
`;

const DetailScore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 10px;
  }
`;

const Bar = styled.div`
  width: 100%;
  margin-bottom: 10px;
  h2 {
    margin-bottom: 10px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    height: 20px;
    flex: 1;
    background-color: rgba(255, 182, 193, 0.5);
    position: relative;
    &::after {
      content: "";
      height: 100%;
      width: ${({ width }) => width || "0%"};
      background-color: #ffb6c1;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  h3 {
    font-size: 14px;
    font-weight: bold;
  }
`;

const TabContent = styled.div`
  text-align: center;
  margin-top: 20px;
  h1 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    color: #555;
  }
`;

const TotalResult = () => {
  const location = useLocation();
  const {
    myName,
    partnerName,
    userBirthday,
    partnerBirthday,
    useMbti,
    partnerMbti,
    relationshipType,
  } = location.state || {};

  const [activeTab, setActiveTab] = useState("zodiac");

  const userZodiac = getZodiac(userBirthday);
  const partnerZodiac = getZodiac(partnerBirthday);

  const starData = StarData;
  const result = starData.find(
    (data) =>
      (data.signs[0] === userZodiac && data.signs[1] === partnerZodiac) ||
      (data.signs[0] === partnerZodiac && data.signs[1] === userZodiac)
  );

  const { score, message } = NameData(myName, partnerName);

  const renderTabContent = () => {
    switch (activeTab) {
      case "zodiac":
        return (
          <TabContent>
            <h1>별자리 궁합</h1>
            {result ? (
              <>
                <p>별자리: {result.signs.join(" & ")}</p>
                <p>
                  {relationshipType === "친구"
                    ? result.friendship
                    : result.love}
                </p>
                <p>
                  점수: {relationshipType === "친구"
                    ? result.friendshipScore
                    : result.loveScore}
                  점
                </p>
              </>
            ) : (
              <p>별자리 궁합 데이터를 찾을 수 없습니다.</p>
            )}
          </TabContent>
        );
      case "mbti":
        return (
          <TabContent>
            <h1>MBTI 궁합</h1>
            <p>MBTI 데이터는 아직 준비 중입니다.</p>
          </TabContent>
        );
      case "name":
        return (
          <TabContent>
            <h1>이름 궁합</h1>
            <p>이름 점수: {score}점</p>
            <p>{message}</p>
          </TabContent>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <TotalScore>
        <h2>전체 궁합</h2>
        <h3>{((score + (result?.loveScore || 0)) / 2).toFixed(0)}점</h3>
      </TotalScore>
      <Tabs>
        <button
          className={activeTab === "zodiac" ? "active" : ""}
          onClick={() => setActiveTab("zodiac")}
        >
          별자리
        </button>
        <button
          className={activeTab === "mbti" ? "active" : ""}
          onClick={() => setActiveTab("mbti")}
        >
          MBTI
        </button>
        <button
          className={activeTab === "name" ? "active" : ""}
          onClick={() => setActiveTab("name")}
        >
          이름
        </button>
      </Tabs>
      {renderTabContent()}
    </Container>
  );
};

export default TotalResult;
