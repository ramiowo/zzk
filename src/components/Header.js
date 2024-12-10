import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import styled from "styled-components";

const Container = styled.section``;
const BackButton = styled.button``;
const Logo = styled.div``;

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showBackButton = location.pathname !== "/";
  return (
    <Container>
      {showBackButton && (
        <BackButton onClick={() => Navigate(-1)}>
          <IoIosArrowBack />
        </BackButton>
      )}
      <Logo>
        <Link to={"/"}>
          <img src="../../imgs/logo.svg" alt="logo" />
        </Link>
      </Logo>
    </Container>
  );
};

export default Header;
