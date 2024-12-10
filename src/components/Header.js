import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";
import logo from "../imgs/logo.svg";

const Container = styled.section`
  width: 100%;
  height: 50px;
  max-width: 393px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  /* background-color: rgba(233, 109, 128, 0.1); */

  /* box-shadow: 0px 3px 10px rgba(149, 42, 68, 0.2); */
  position: relative;
`;
const BackButton = styled.button`
  all: unset;
  position: absolute;
  left: 0;
  padding-left: 16px;
  font-size: 20px;
`;
const Logo = styled.div`
  img {
    width: 46px;
    height: 17px;
  }
`;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname !== "/";
  return (
    <Container>
      {showBackButton && (
        <BackButton onClick={() => navigate(-1)}>
          <IoIosArrowBack />
        </BackButton>
      )}
      <Logo>
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
      </Logo>
    </Container>
  );
};

export default Header;
