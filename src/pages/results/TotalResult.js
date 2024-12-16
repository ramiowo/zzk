import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { NameData } from "./data/NameData";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getZodiac, StarData } from "./data/Star";
import Mbti from "./data/Mbti";

import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const Container = styled.section`
  width: 100%;
  max-width: 393px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BackColor = styled.div`
  width: 308px;
  height: 308px;
  position: absolute;
  left: 43px;
  top: 160px;
  z-index: -1;
  border-radius: 50%;
  background-color: rgba(243, 147, 171, 0.3);
  filter: blur(50px);
`;

const TotalScore = styled.div`
  margin-top: 20px;
  text-align: center;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .doughnut-chart {
    width: 150px;
    height: 150px;
    position: relative;

    .score-label {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 18px;
      font-weight: bold;
    }
  }
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    padding: 10px;
    color: #333;
    font-family: "SCDream";

    &.active {
      color: black;
      font-weight: bold;
      border-bottom: 2px solid #eeadbd;
    }
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

const ScoreBar = styled.div`
  width: 345px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 10px;

  .bar-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 15px;

    h4 {
      font-size: 16px;
      margin-bottom: 10px;
    }

    .bar-container {
      flex: 1;
      height: 15px;
      background-color: #f7e9ed;
      border-radius: 10px;
      position: relative;
      margin-right: 10px;

      .filled {
        height: 100%;
        background-color: #ffb6c1;
        border-radius: 10px 0 0 10px;
      }
    }

    span {
      font-size: 14px;
      font-weight: bold;
      min-width: 40px;
      text-align: right;
    }
  }
`;

const Wrap = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

const TotalResult = () => {
  const location = useLocation();
  const {
    myName,
    partnerName,
    userBirthday,
    partnerBirthday,
    userMbti,
    partnerMbti,
    relationshipType,
  } = location.state || {};

  const [activeTab, setActiveTab] = useState("zodiac");

  const userZodiac = getZodiac(userBirthday);
  const partnerZodiac = getZodiac(partnerBirthday);

  const starData = StarData;
  const mbtiData = Mbti;

  const result = starData.find(
    (data) =>
      (data.signs[0] === userZodiac && data.signs[1] === partnerZodiac) ||
      (data.signs[0] === partnerZodiac && data.signs[1] === userZodiac)
  );

  const { score, message } = NameData(myName, partnerName);

  const mbtiResult = mbtiData.find(
    (data) =>
      (data.pair[0] === userMbti && data.pair[1] === partnerMbti) ||
      (data.pair[0] === partnerMbti && data.pair[1] === userMbti)
  );

  const zodiacScore = result
    ? relationshipType === "친구"
      ? result.friendshipScore
      : result.loveScore
    : 0;
  const mbtiScore = mbtiResult
    ? relationshipType === "친구"
      ? mbtiResult.friendshipScore
      : mbtiResult.romanticScore
    : 0;
  const nameScore = score || 0;

  const totalScore = ((zodiacScore + mbtiScore + nameScore) / 3).toFixed(0);

  const data = {
    datasets: [
      {
        data: [totalScore, 100 - totalScore],
        backgroundColor: ["#FFB6C1", "#F7E9ED"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      tooltip: { enabled: false },
      legend: { display: false },
    },
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "zodiac":
        return (
          <TabContent>
            <h1>별자리 궁합</h1>
            <p>별자리: {userZodiac} & {partnerZodiac}</p>
            <p>점수: {zodiacScore}점</p>
            <p>
              {relationshipType === "친구" ? result?.friendship : result?.love}
            </p>
          </TabContent>
        );
      case "mbti":
        return (
          <TabContent>
            <h1>MBTI 궁합</h1>
            <p>MBTI: {userMbti} & {partnerMbti}</p>
            <p>점수: {mbtiScore}점</p>
            <p>
              {relationshipType === "친구"
                ? mbtiResult?.description.friendship
                : mbtiResult?.description.romantic}
            </p>
          </TabContent>
        );
      case "name":
        return (
          <TabContent>
            <h1>이름 궁합</h1>
            <p>이름 점수: {nameScore}점</p>
            <p>{message}</p>
          </TabContent>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <BackColor/>
      <TotalScore>
        <h2>전체 궁합</h2>
        <div className="doughnut-chart">
          <Doughnut data={data} options={options} />
          <div className="score-label">{totalScore}점</div>
        </div>
      </TotalScore>

      <ScoreBar>
        <div className="bar-item">
          <h4>별자리</h4>
          <Wrap>
          <div className="bar-container">
            <div className="filled" style={{ width: `${zodiacScore}%` }}></div>
          </div>
          <span>{zodiacScore}점</span>
          </Wrap>
        </div>
        <div className="bar-item">
          <h4>MBTI</h4>
          <Wrap>
          <div className="bar-container">
            <div className="filled" style={{ width: `${mbtiScore}%` }}></div>
          </div>
          <span>{mbtiScore}점</span>
          </Wrap>
        </div>
        <div className="bar-item">
          <h4>이름</h4>
          <Wrap>
          <div className="bar-container">
            <div className="filled" style={{ width: `${nameScore}%` }}></div>
          </div>
          <span>{nameScore}점</span>
          </Wrap>
        </div>
      </ScoreBar>

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
