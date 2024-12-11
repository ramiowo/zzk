import styled from "styled-components";
import logo from "../../imgs/logo.svg";
import homeheart from "../../imgs/homeheart.svg";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-width: 393px;
  height: 100vh;
  margin: 0 auto;
  /* background: rgb(236, 203, 211);
  background: linear-gradient(
    180deg,
    rgba(236, 203, 211, 1) 0%,
    rgba(245, 245, 245, 1) 100%
  ); */
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
  background-color: rgba(243, 147, 171, 0.5);
  filter: blur(50px);
`;

const HomeLogo = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 154px;
    height: 56px;
    margin-top: 70px;
  }
`;

const HomeHeart = styled.div`
  /* z-index: 10; */
  margin-top: 40px;
  img {
    width: 400px;
    height: 280px;
    z-index: 10;
    object-fit: contain;
    overflow: hidden;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
  button {
    all: unset;
    width: 320px;
    height: 55px;
    border-radius: 50px;
    text-align: center;
    cursor: pointer;
    letter-spacing: 0px;
    box-shadow: inset 0 0 20px rgba(255,255,255,0.3);
    border: 2px solid rgba(255,255,255,0.4);
  }
  .with {
    background-color: #eeadbd;
    color: #f5f5f5;
    margin-bottom: 16px;
    font-weight: 400;
  }
  .mbti {
    background-color: #fff;
    color: #eeadbd;
    box-shadow: inset 0 0 20px rgba(238,173,189,0.1);
    font-weight: 400;
    
  }
`;

const Home = () => {
  const testNav = useNavigate();

  const handleWith = () => {
    testNav("/info");
  };

  const handleMbti = () => {
    testNav("/test");
  };
  return (
    <Container>
      <BackColor />
      <HomeLogo>
        <img src={logo} alt="homelogo" />
      </HomeLogo>
      <HomeHeart>
        <img src={homeheart} alt="homeheart" />
      </HomeHeart>
      <Button>
        <button onClick={handleWith} className="with">
          우리의 궁합 보기
        </button>
        <button onClick={handleMbti} className="mbti">
          나의 MBTI 알아보기
        </button>
      </Button>
    </Container>
  );
};

export default Home;
