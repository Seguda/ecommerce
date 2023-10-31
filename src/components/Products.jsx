import React from "react";
import styled from "styled-components";
//import { popularProducts, categories } from "../data";
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

export const Products = ({category, sort}) => {
  const[products, setProducts] = useState([]);
  const[filteredProducts, setFilteredProducts] = useState([]);
  useEffect(()=>{
    const getProducts = async() => {
      try{
        const res = await axios.get(category ? `http://localhost:5000/api/products?category=${category}`:"http://localhost:5000/api/products" );
    console.log(res);
            setProducts(res.data);
      }catch(err){
      }
    };
    getProducts();
  },[category]);

  useEffect(()=>{
    setFilteredProducts(
      products.filter(item => item["categories"].includes(category)
      )
    )
  },[category, products]);

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
