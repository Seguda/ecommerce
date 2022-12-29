import { Announcements } from "../components/Announcements";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`

`;
const Wrapper = styled.div`

`;
const ImgContainer = styled.div`

`;
const Img = styled.img`

`;
const InfoContainer = styled.div`

`;
const Title = styled.h1`

`;
const Desc = styled.p`

`;
const Price = styled.span`

`;

export const Product = () => {
  return (
   <Container>
        <Announcements/>
        <NavBar/>
        <Wrapper>
            <ImgContainer>
                <Img src="https://i.etsystatic.com/21314506/r/il/3bf3f7/2116195361/il_1588xN.2116195361_dmuw.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Pajama</Title>
                <Desc>Le Le Le Sakine niye gittin duuugune!</Desc>
                <Price>$20.99</Price>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
        
   </Container>
  )
}
export default Product