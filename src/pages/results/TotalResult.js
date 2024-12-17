import React, { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { NameData } from "./data/NameData";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getZodiac, StarData } from "./data/Star";
import Mbti from "./data/Mbti";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Helmet } from "react-helmet-async";
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
    font-size: 22px;
    margin-bottom: 15px;
    font-weight: 400;
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
  gap: 10px;
  margin-top: 40px;
  margin-bottom: 30px;

  button {
    width: 100px;
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    padding: 10px;
    color: #333;
    font-family: "SCDream";

    &.active {
      color: black;
      font-weight: 600;
      border-bottom: 2px solid #eeadbd;
      background-color: rgba(255, 255, 255, 0.4);
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
  }
`;

const TabContent = styled.div`
  text-align: center;
  margin-top: 10px;
  .disc {
    margin-bottom: 40px;
    line-height: 22px;
    font-size: 16px;
    padding: 0 16px;
    color: #333;
  }

  .conWrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 30px;

    p {
      margin-bottom: 8px;
      color: #333;
    }
    .name {
      color: #555;
      font-weight: 400;
    }
  }

  h1 {
    font-size: 22px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #555;
  }
  span {
    color: #ee6989;
  }
`;

const ScoreBar = styled.div`
  width: 345px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 10px;
  .subTitle {
    text-align: center;
    margin: 20px 0 10px 0;
    font-weight: 500;
  }

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
        background-color: #ee6989;
        border-radius: 10px 0 0 10px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 500;
      min-width: 40px;
      text-align: right;
      span {
        margin-left: 3px;
        font-weight: 400;
        opacity: 0.6;
      }
    }
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const TotalResult = () => {
  const location = useLocation();
  const chartRef = useRef(null);
  const [gradient, setGradient] = useState(null);
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

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 150);
      gradient.addColorStop(0, "#EEADBD");
      gradient.addColorStop(1, "#EE6989");
      setGradient(gradient);
    }
  }, []);

  const data = {
    datasets: [
      {
        data: [totalScore, 100 - totalScore],
        backgroundColor: [gradient || "#FFB6C1", "#F7E9ED"],
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
            <div className="conWrap">
              <div className="myZodiac">
                <p>{userZodiac}</p>
                <p className="name">{myName}</p>
              </div>
              <span>&</span>
              <div className="partnerZodiac">
                <p>{partnerZodiac}</p>
                <p className="name">{partnerName}</p>
              </div>
            </div>

            <p className="disc">
              {relationshipType === "친구" ? result?.friendship : result?.love}
            </p>
          </TabContent>
        );
      case "mbti":
        return (
          <TabContent>
            <div className="conWrap">
              <div className="myCon">
                <p>{userMbti}</p>
                <p className="name">{myName}</p>
              </div>
              <span>&</span>
              <div className="partnerCon">
                <p>{partnerMbti}</p>
                <p className="name">{partnerName}</p>
              </div>
            </div>
            <p className="disc">
              {relationshipType === "친구"
                ? mbtiResult?.description.friendship
                : mbtiResult?.description.romantic}
            </p>
          </TabContent>
        );
      case "name":
        return (
          <TabContent>
            <div className="conWrap">
              <div className="myCon">
                <p className="name">{myName}</p>
              </div>
              <span style={{ marginBottom: "5px" }}>&</span>
              <div className="partnerCon">
                <p className="name">{partnerName}</p>
              </div>
            </div>
            <p className="disc">{message}</p>
          </TabContent>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>궁합결과 | 짝짝꿍 </title>
      </Helmet>
      <Container>
        <BackColor />
        <TotalScore>
          <h2>전체 궁합</h2>
          <div className="doughnut-chart">
            <Doughnut ref={chartRef} data={data} options={options} />
            <div className="score-label">{totalScore}점</div>
          </div>
        </TotalScore>

        <ScoreBar>
          <h3 className="subTitle">항목별 궁합</h3>
          <div className="bar-item">
            <h4>별자리</h4>
            <Wrap>
              <div className="bar-container">
                <div
                  className="filled"
                  style={{ width: `${zodiacScore}%` }}
                ></div>
              </div>
              <p>
                {zodiacScore}
                <span>점</span>
              </p>
            </Wrap>
          </div>
          <div className="bar-item">
            <h4>MBTI</h4>
            <Wrap>
              <div className="bar-container">
                <div
                  className="filled"
                  style={{ width: `${mbtiScore}%` }}
                ></div>
              </div>
              <p>
                {mbtiScore}
                <span>점</span>
              </p>
            </Wrap>
          </div>
          <div className="bar-item">
            <h4>이름</h4>
            <Wrap>
              <div className="bar-container">
                <div
                  className="filled"
                  style={{ width: `${nameScore}%` }}
                ></div>
              </div>
              <p>
                {nameScore}
                <span>점</span>
              </p>
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
    </>
  );
};

export default TotalResult;
