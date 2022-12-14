import styled from "styled-components";
import { Announcements } from "../components/Announcements";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div`
`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display:flex;
    justify-content: space-between;
`;
const Filter= styled.div`
    margin:20px;
     ${mobile({ width :"0px 20px", display:"flex", flexDirection:"column" })}
   `;
const FilterText= styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px" })}
   `;
   
const Option = styled.option`
`;


export const ProductList = () => {
  return (
    <Container>
        <Announcements/>
        <NavBar/>
        <Title>Home Textile</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                    Products
                </Option>
                <Option>Home Textile</Option>
                <Option>Waldorf Dolls</Option>
                <Option>Doll Clothing</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>
                    Newest
                </Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select></Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
export default ProductList