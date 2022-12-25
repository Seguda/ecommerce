import styled from "styled-components";
import { Announcements } from "../components/Announcements";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

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
`;
const FilterText= styled.div`
    font-size:20px;
    font-weight: 600;
`;
const Select = styled.select`
`;
const Option = styled.option`
`;


export const ProductList = () => {
  return (
    <Container>
        <NavBar/>
        <Announcements/>
        <Title>Home Textile</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText></Filter>
            <Select>
                <Option disabled selected>
                    Products
                </Option>
                <Option>Home Textile</Option>
                <Option>Waldorf Dolls</Option>
                <Option>Doll Clothing</Option>
                <Option></Option>
                <Option></Option>
            </Select>
            <Filter><FilterText>Sort Products:</FilterText></Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}
export default ProductList