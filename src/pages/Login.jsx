import React, { useState } from "react";
import styled from "styled-components"
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
    linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
     ),
    /*url("https://images.unsplash.com/photo-1513717192602-ab369702eb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80") center;*/
    /*url("https://images.unsplash.com/photo-1638531129903-41c21e335be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpbmtnbyUyMGJpbG9iYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60") center;*/
    url("https://images.unsplash.com/photo-1516041384973-da0851160302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1803&q=80") center;
    background-size:cover;
    display: flex;
    align-items:center;
    justify-content:center;
    `;
const Wrapper = styled.div`
     width: 25%;
     padding: 20px;
     background-color:white;
     ${mobile({ width :"75%" })}
`;
const Title = styled.h1`
     font-weight: 300;
     font-size: 24px;
`;
const Form = styled.form`
     display: flex;
     flex-direction: column;

`;
const Input = styled.input`
     flex: 1; 
     min-width: 40%;
     margin: 10px 0;
     padding: 10px;
`;
const Button = styled.button`
     width: 40%;
     border: none;
     padding: 15px 20px;
     background-color: teal;
     color: white;
     cursor: pointer;
     margin-bottom: 10px;
     &: disabled{
          color: green;
          cursor: not-allowed;
     }
`;

const Error= styled.span`
     color:red;
`
const Link = styled.a`
     margin: 5px 0px;
     font-size: 12px;
     text-decoration: underline;
     cursor: pointer;
   
`;

export const Login = () => {
     const [username, setUsername ] = useState("");
     const [password, setPassword] = useState("");
     const dispatch = useDispatch();
     const {isFetching, error} = useSelector((state) => state.user);
     const handleClick = (e) =>{
          e.preventDefault();
          login(dispatch, {username, password});
          console.log(username);
     }
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder = "username" 
                onChange ={(e) => setUsername(e.target.value)}/>
                <Input placeholder = "password" type = "password" 
                onChange ={(e) => setPassword(e.target.value)}/>
                <Button onClick= {handleClick} disabled = {isFetching}>LOGIN</Button>
                {error && <Error>Something went wrong!</Error>}
                <Link>DID YOU FORGET YOUR PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}
export default Login;