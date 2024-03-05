import React, { useState } from "react";
import styled from "styled-components"
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCalls";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
    linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
     ), 
    /*url("https://images.unsplash.com/photo-1513717192602-ab369702eb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80") center;*/
    /*url("https://images.unsplash.com/photo-1638531129903-41c21e335be9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpbmtnbyUyMGJpbG9iYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60") center; */
    url("https://images.unsplash.com/photo-1516041384973-da0851160302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1803&q=80")center;
    background-size:cover;
    display: flex;
    align-items:center;
    justify-content:center;
    `;
const Wrapper = styled.div`
     width: 40%;
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
`;
const Error= styled.span`
     color:red;
`;

export const Register = () => {
     const [ name, setName ] = useState("");
     const [ lastName, setLastname ] = useState("");
     const [username, setUsername ] = useState("");
     const [email, setEmail ] = useState("");
     const [password, setPassword] = useState("");
     const dispatch = useDispatch();
     const {error} = useSelector((state) => state.user);
     const handleClick = (e) =>{
          e.preventDefault();
          register(dispatch, {username, email, password});
          console.log(email);

     }
     
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder = "name"
                onChange ={(e) => setName(e.target.value)}/>
                <Input placeholder = "lastname"
                onChange ={(e) => setLastname(e.target.value)}/>
                <Input placeholder = "username"
                onChange ={(e) => setUsername(e.target.value)}/>
                <Input placeholder = "email"
                onChange ={(e) => setEmail(e.target.value)}/>
                <Input placeholder = "password" type = "password" 
                onChange ={(e) => setPassword(e.target.value)}/>
                <Input placeholder = "confirm password" type = "password"
                onChange ={(e) => setPassword(e.target.value)}/>
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b> PRIVACY POLICY </b>
                </Agreement>
                <Button onClick= {handleClick}>CREATE</Button>
              {error && <Error>Something went wrong!</Error>}
        </Form>
        </Wrapper>
    </Container>
  )
}

export default Register