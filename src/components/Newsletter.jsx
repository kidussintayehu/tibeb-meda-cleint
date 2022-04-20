import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { Logout } from "../redux/apiCalls";
import { mobile } from "../responsive";
// import { mobile } from "../responsive";
import { useDispatch } from "react-redux";

const Container = styled.div`
  height: 60vh;
  background-color: #fbf0f4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ "text-align": "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ "width": "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const SignOutButton = styled.button`
  position : relative;
  margin-right : 93vw;
`
const Newsletter = () => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    Logout(dispatch);
    console.log("loged out")
  }
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
       
      </InputContainer>
      <SignOutButton
        onClick={handleClick}
        >
          SIGN OUT
        </SignOutButton>
    </Container>
  );
};

export default Newsletter;