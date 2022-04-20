import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";
import {  useNavigate } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ "width": "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;
const Error = styled.span`
  color: red;
`;
const Register = () => {
  const [username, setUsername] = useState("");
  const Navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const [message, setmessage] = useState("");
console.log("error",error);

  const handleClick = (e) => {
    e.preventDefault();
    try {
      console.log("user" ,{ username, password,email })
      register(dispatch, { username, password,email });
      if(error === false){
        Navigate("/")
      }else{
        setmessage("something is wrong")
      }

    } catch (error) {
    }
    
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          
          <Input placeholder="username"name="username" 
            onChange={(e) => setUsername(e.target.value)}
            />
          <Input placeholder="email" name="email" 
            onChange={(e) => setEmail(e.target.value)}
            />
          <Input placeholder="password" name="password" 
            onChange={(e) => setPassword(e.target.value)}
            type="password"

            />
          <Input placeholder="confirm password" name="confirm"
            onChange={(e) => setConfirm(e.target.value)}
            type="password"

            />

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={
            username === "" || password === "" || email === "" ||  confirm === "" || confirm !== password ? true : false
          } >CREATE</Button>
         <Error>{message}</Error>
         

        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;