import styled from "styled-components";
import logo from "../../imgs/logo.svg";
import homeheart from "../../imgs/homeheart.svg";

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
  top: 222px;
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
    margin-top: 118px;
  }
`;

const HomeHeart = styled.div`
  /* z-index: 10; */
  margin-top: 40px;
  img {
    z-index: 10;
  }
`;

const Button = styled.div``;

const Home = () => {
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
        <button className="with">우리의 궁합 보기</button>
        <button className="mbti">나의 MBTI 알아보기</button>
      </Button>
    </Container>
  );
};

export default Home;
