import React, { useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 사용
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
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 궁합 계산은 결과 페이지에서 처리하기 위해 상태에만 저장
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
            placeholder="첫 번째 이름"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <input
            type="text"
            placeholder="두 번째 이름"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            style={{ marginRight: "10px", padding: "5px" }}
          />
        </Name>

        {/* 버튼 클릭 시 결과 페이지로 이동 */}
        <Link to={{ pathname: "/totalresult", state: { name1, name2 } }}>
          <button
            type="submit"
            style={{
              padding: "5px 10px",
              marginTop: "20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            우리의 궁합 보기
          </button>
        </Link>
      </form>
    </Container>
  );
};

export default Info;
