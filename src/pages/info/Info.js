import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Link 컴포넌트 사용
import heart from "../../imgs/heart.svg"; // 이미지 경로를 맞게 설정하세요
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  max-width: 393px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 30px;
`;

const Name = styled.div``;

const Info = () => {
  const [myName, setMyName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/totalresult", {
      state: {
        myName,
        partnerName,
      },
    });
  };

  return (
    <Container>
      <Title>
        <p>나</p>
        <img src={heart} alt="heart" />
        <p>짝꿍</p>
      </Title>
      <form onSubmit={handleSubmit}>
        <Name>
          <input
            type="text"
            placeholder="내 이름"
            value={myName}
            onChange={(e) => setMyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="상대 이름"
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
          />
        </Name>
        <button type="submit">우리의 궁합 보기</button>
      </form>
    </Container>
  );
};

export default Info;
