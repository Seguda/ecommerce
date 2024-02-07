import React from "react";
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom/";

const Container= styled.div`
    display:flex;
    ${mobile({flexDirection:"column" })}
    `;
const Left= styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
    `;
const Logo= styled.h1`
    
    `;
const Description= styled.p`
    margin: 20px 0px;
    `;
const SocialContainer= styled.div`
    display:flex;
    `;    
const SocialIcon= styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    align-items:center;
    display:flex;
    justify-content:center;
    margin-right:20px;
    `;

const Center= styled.div`   
   flex:1;
   padding:20px;
   ${mobile({ display:"none" })}
    `;
const Title=styled.h3`
    margin-bottom:30px;
`;
const List = styled.ul`
    margin:20px;
    padding:20px;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`;
const ListItem = styled.li`
    width:70%;
    margin-bottom:10px;
     margin:20px;
`;
const Right= styled.div`
    flex:1;
    padding:20px;
    ${mobile({ backgroundColor:"#fff8f8" })}
    `;
const ContactItem= styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`;
const Payment=styled.img`
    width:50%;
`;

export const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>GinkgoIvyDesign</Logo>
            <Description>There are ........</Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon> 
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
                <List>
                    <Link to="/"><ListItem>Home</ListItem></Link>
                    <Link to="/productlist"><ListItem>Waldorf Dolls</ListItem></Link>
                    <Link to="/cart"><ListItem>Cart</ListItem></Link>
                    <Link to="/products"><ListItem>Home Textile</ListItem></Link>
                    <Link to="/product"><ListItem>Accessories</ListItem></Link>
                </List>
            
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/>
                Massacchusets
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>
                +1(540)9987342
            </ContactItem>
            <ContactItem><MailOutline style={{marginRight:"10px"}}/>
                ginkgoivydesign@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}
export default Footer;