import React from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = ({category, filters, sort}) => {
  const[products, setProducts] = useState([]);
  const[filteredProducts, setFilteredProducts] = useState([]);
  
  useEffect(()=>{
    const getProducts = async() => {
      try{
        const res = await axios.get(
          category 
          ? `https://ecommerceserver-a0xl.onrender.com/api/products?category=${category}`
          :"https://ecommerceserver-a0xl.onrender.com/api/products" 
          );
    //console.log(res);
            setProducts(res.data);
      }catch(err){
      }
    };
    getProducts();
  },[category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);


  useEffect(()=>{
    if(sort === "newest"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      );
    } else if(sort === "asc"){
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>a.price - b.price)
      );

    }else{
      setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>b.price - a.price)
      );
    }
  },[sort])
  return (
    <Container>
      {category 
      ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
      : products 
          .slice(0,8)
          .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
};
export default Products;
