import styled from "styled-components";
import heart from "../../imgs/heart.svg";
// import { Form } from "react-router-dom";

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
// const Form = styled.form``
const InputBox = styled.div``
const Name = styled.div``
const Bday = styled.div``
const Mbtis = styled.div

const Info = () => {
  return (
    <Container>
      <Title>
        <p>나</p>
        <img src={heart} alt="" />
        <p>짝꿍</p>
      </Title>
      {/* <Form>  */}
      
      <Name>
        <h2>이름</h2>
        <InputBox>
        <input type="text" />
        <input type="text" />
        </InputBox>
      </Name>
      
      <Bday>
        <h2>생일 <span>ex.0801</span></h2>
        <InputBox>
        <input type="text" />
        <input type="text" />
        </InputBox>
      </Bday>

      <Mbtis>
        <h2>MBTI</h2>
        <InputBox>
        <input type="text" />
        <input type="text" />
        </InputBox>
      </Mbtis>

      {/* </Form> */}
    </Container>
  );
};

export default Info;
