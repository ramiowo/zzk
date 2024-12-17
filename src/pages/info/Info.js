import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heart from "../../imgs/heart.svg";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Container = styled.section`
  width: 100%;
  max-width: 393px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 0 16px;
  position: relative;
  input {
    all: unset;
    box-sizing: border-box;
    width: 170px;
    height: 48px;
    border: 1px solid #fff;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.3);
    font-size: 14px;
    padding: 0 15px;

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  h3 {
    margin-top: 30px;
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 10px;
    margin-left: 10px;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  margin-top: 40px;
  margin-bottom: 12px;

  img {
    position: absolute;
  }

  p {
    font-size: 22px;
    font-weight: 300;
    margin-left: 10px;
  }
`;

const UnderLine = styled.div`
  margin: 0 auto;
  width: 296px;
  height: 1px;
  /* margin-bottom: 28px; */
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const NameWrap = styled.div``;

const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StarWrap = styled.div`
  span {
    margin-left: 10px;
    font-size: 10px;
    color: #777777;
    font-weight: 200;
    letter-spacing: 0px;
  }
`;
const Star = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const MbtiWrap = styled.div``;
const Mbti = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const WithWrap = styled.div`
  margin-top: 40px;
  h3 {
    margin-left: 0;
    text-align: center;
    margin-left: 0;
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "SCDream";
  margin-top: 20px;

  button {
    font-family: "SCDream";
    width: 170px;
    height: 48px;
    padding: 10px 20px;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
  }

  .active {
    background-color: #eeadbd;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.4);
    color: #fff;
  }

  .inactive {
    background-color: #fff;
    color: #eeadbd;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(255, 204, 204, 0.4);
  }
`;

const TotalButton = styled.button`
  all: unset;
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  background-color: #eeadbd;
  border-radius: 50px;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 50px;
  border: 2px solid rgba(255, 255, 255, 0.4);
`;

const BackColor = styled.div`
  width: 308px;
  height: 308px;
  position: absolute;
  left: 43px;
  top: 160px;
  z-index: -1;
  border-radius: 50%;
  background-color: rgba(243, 147, 171, 0.4);
  filter: blur(50px);
`;

const Info = () => {
  const [myName, setMyName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [userBirthday, setUserBirthday] = useState("");
  const [partnerBirthday, setPartnerBirthday] = useState("");
  const [userMbti, setUserMbti] = useState("");
  const [partnerMbti, setPartnerMbti] = useState("");
  const [relationshipType, setRelationshipType] = useState("친구");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const sanitizedUserMbti = userMbti.trim().toUpperCase();
    const sanitizedPartnerMbti = partnerMbti.trim().toUpperCase();

    navigate("/totalresult", {
      state: {
        myName,
        partnerName,
        userBirthday,
        partnerBirthday,
        relationshipType,
        userMbti: sanitizedUserMbti,
        partnerMbti: sanitizedPartnerMbti,
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>궁합보기 | 짝짝꿍 </title>
      </Helmet>
      <Container>
        <BackColor />
        <Title>
          <p>나</p>
          <img src={heart} alt="heart" />
          <p>짝꿍</p>
        </Title>
        <UnderLine />
        <form onSubmit={handleSubmit}>
          <NameWrap>
            <h3>이름</h3>
            <Name>
              <input
                type="text"
                placeholder="나의 이름"
                value={myName}
                onChange={(e) => setMyName(e.target.value)}
              />
              <input
                type="text"
                placeholder="짝꿍 이름"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
              />
            </Name>
          </NameWrap>
          <StarWrap>
            <h3>
              생일<span>ex ) 0109</span>
            </h3>
            <Star>
              <input
                type="text"
                placeholder="나의 생일"
                value={userBirthday}
                onChange={(e) => setUserBirthday(e.target.value)}
              />
              <input
                type="text"
                placeholder="짝꿍 생일"
                value={partnerBirthday}
                onChange={(e) => setPartnerBirthday(e.target.value)}
              />
            </Star>
          </StarWrap>
          <MbtiWrap>
            <h3>MBTI</h3>
            <Mbti>
              <input
                type="text"
                placeholder="나의 MBTI"
                value={userMbti}
                onChange={(e) => setUserMbti(e.target.value)}
              />
              <input
                type="text"
                placeholder="짝꿍 MBTI"
                value={partnerMbti}
                onChange={(e) => setPartnerMbti(e.target.value)}
              />
            </Mbti>
          </MbtiWrap>
          <WithWrap>
            <h3>우리의 관계는?</h3>
            <ButtonGroup>
              <button
                type="button"
                className={relationshipType === "친구" ? "active" : "inactive"}
                onClick={() => setRelationshipType("친구")}
              >
                친구
              </button>
              <button
                type="button"
                className={relationshipType === "연인" ? "active" : "inactive"}
                onClick={() => setRelationshipType("연인")}
              >
                연인
              </button>
            </ButtonGroup>
          </WithWrap>
          <TotalButton type="submit">우리의 궁합 보기</TotalButton>
        </form>
      </Container>
    </>
  );
};

export default Info;
