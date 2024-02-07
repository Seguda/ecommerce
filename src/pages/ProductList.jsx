import React from "react";
// import styled from "styled-components";
import { Announcements } from "../components/Announcements";
// import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import Newsletter from "../components/Newsletter";
// import Products from "../components/Products";
// import { mobile } from "../responsive";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
// import { useState } from "react";

// const Container = styled.div`
// `;
// const Title = styled.h1`
//     margin: 20px;
// `;
// const FilterContainer = styled.div`
//     display:flex;
//     justify-content: space-between;
// `;
// const Filter= styled.div`
//     margin:20px;
//      ${mobile({ width :"0px 20px", display:"flex", flexDirection:"column" })}
//    `;
// const FilterText= styled.span`
//     font-size: 20px;
//     font-weight: 600;
//     margin-right: 20px;
// `;
// const Select = styled.select`
//     padding: 10px;
//     margin-right: 20px;
//     ${mobile({ margin: "10px 0px" })}
//    `;
   
// const Option = styled.option`
// `;


// export const ProductList = () => {
//     const location= useLocation();
//     //console.log(location);
//     const [category, setCategory] =useState(location.pathname.split("/")[2]);
//     const [sort, setSort] =useState("newest");

//     //console.log(filters);
//   return (
//     <Container>
//         <Announcements/>
//         <NavBar/>
//         <Title>{category}</Title>
//         <FilterContainer>
//             <Filter>
//                 <FilterText>Filter Products:</FilterText>
//             <Select value={category} name="products" onChange={(e) => setCategory(e.target.value)}>
//                 <Option disabled>
//                     Products
//                 </Option>
//                 <Option value="Home" >Home Textile</Option>
//                 <Option value="Toys">Waldorf Dolls</Option>
//                 <Option value="Accessories">Accessories</Option>
//             </Select>
            
//             </Filter>
            
//             <Filter><FilterText>Sort Products:</FilterText>
//             <Select onChange={(e)=>setSort(e.target.value)}>
//                 <Option value="newest"> Newest</Option>
//                 <Option value="asc">Price (asc)</Option>
//                 <Option value="desc">Price (desc)</Option>
//             </Select></Filter>
//         </FilterContainer>
//         <Products category={category} sort={sort}/>
//         <Newsletter/>
//         <Footer/>
//     </Container>
//   )
// }
// export default ProductList
import styled from "styled-components";
//import Navbar from "../components/Navbar";
//import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <NavBar />
      <Announcements />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;