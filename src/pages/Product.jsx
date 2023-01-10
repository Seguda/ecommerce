import { Announcements } from "../components/Announcements";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div`

`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection:"column" })}

`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Img = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height:"40vh"})}

`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px"})}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%"})}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
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
            
            <AddContainer>
                <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
        
   </Container>
  )
}
export default Product