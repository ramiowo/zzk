import React from "react";
import { NameData } from "./data/NameData";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { getZodiac, StarData } from "./data/Star";

const Container = styled.section`
  width: 100%;
  max-width: 393px;
  margin: 0 auto;
`;

const TotalScore = styled.div``;

const Name = styled.div``;

const Star = styled.div``;

const Mbti = styled.div``;

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

  const userZodiac = getZodiac(userBirthday);
  const partnerZodiac = getZodiac(partnerBirthday);

  const starData = StarData;
  const result = starData.find(
    (data) =>
      (data.signs[0] === userZodiac && data.signs[1] === partnerZodiac) ||
      (data.signs[0] === partnerZodiac && data.signs[1] === userZodiac)
  );
  // 궁합 계산
  const { score, message } = NameData(myName, partnerName);
  // console.log(myName);
  return (
    <Container>
      <TotalScore>
        <h2>전체 궁합</h2>
      </TotalScore>
      <Name>
        <p>
          나: {myName} | 상대: {partnerName}
        </p>
        <p>궁합 점수: {score}점</p>
        <p>{message}</p>
      </Name>
      <Star>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1>
            {myName}와 {partnerName}의 궁합
          </h1>
          {result ? (
            <>
              <h2>{result.signs.join(" & ")}</h2>
              {relationshipType === "친구" ? (
                <>
                  <p>{result.friendship}</p>
                  <p>{result.friendshipScore}점</p>
                </>
              ) : (
                <>
                  <p>{result.love}</p>
                  <p>{result.loveScore}점</p>
                </>
              )}
            </>
          ) : (
            <p>별자리 궁합 데이터를 찾을 수 없습니다.</p>
          )}
        </div>
      </Star>
      <Mbti></Mbti>
    </Container>
  );
};

export default TotalResult;
