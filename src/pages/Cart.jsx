import React, { useEffect, useState } from "react";
import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components'
import { Announcements } from '../components/Announcements';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { removeProduct, addQuantity, removeQuantity } from "../redux/cartRedux";


const Key = process.env.REACT_APP_STRIPE;
const Container = styled.div`
`;
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px"})}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    PADDING:20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none" };
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white" };
`;
// const TopTexts = styled.div`
//     ${mobile({ display: "none"})}

// `;
// const TopText = styled.span`
//     text-decoration: underline;
//     cursor: pointer;
//     margin: 0px 10px;
// `;  
const Bottom = styled.div`
    display: flex;
    justify-content:space-between;
    ${mobile({ flexDirection: "column"})}
`;
const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display: flex;
    justify-content:space-between;
    ${mobile({ flexDirection: "column"})}
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
   width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content:space-around;
`;
const ProductName = styled.span`
    
`;

const Price = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin:5px;
    ${mobile({ margin: "5px 15px"})}
`;
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px"})}
`;
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding:20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const RemoveButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none" };
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white" };
`;
const Button = styled.button`
    width:100%;
    padding:10px;
    background-color: black;
    color: white;
    font-weight: 600;

`;

export const Cart = () => {
    const cart = useSelector((state)=>state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();

    const onToken = (token) => {
        setStripeToken(token);
    }
    console.log(stripeToken);

    useEffect(()=>{
        const makeRequest =async ()=>{
            try{
                const res = await userRequest.post("/checkout/payment",{
                    tokenId :stripeToken.id,
                    amount:cart.total *100,
                }) 
                    history.push("/success", {
                        stripeData: res.data,
                        products: cart,});        
            }catch{}
        };
        stripeToken && makeRequest();
    }, [stripeToken,cart.total, cart,history])

    const handleQuantity = (type, index) => {
    if (type === "dec" && cart.products[index].quantity > 1) {
        dispatch(removeQuantity({ index }));
    } else {
        dispatch(addQuantity({ index }));
    }
  };
  const handleClick = (index) => {
    dispatch(
      removeProduct({ index })
    );
  };
  const total = cart.products.reduce(
  (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price,
  0,
);
  return (
    <Container> 
        <Announcements/>
        <NavBar/>
        <Wrapper>
            <Title>MY BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                {/* <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>My Wishlist(0)</TopText>
                </TopTexts> */}
                {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
            </Top>
            <Bottom>
                <Info>
            {cart.products.map((product, index) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    {/* <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId> */}
                  </Details>
                </ProductDetail>
                <Price>
                  <ProductAmountContainer>
              <Remove onClick={() => handleQuantity("dec", index)} />
              <ProductAmount>{product.quantity}</ProductAmount>
              <Add onClick={() => handleQuantity("inc", index)} />
              </ProductAmountContainer>
            <RemoveButton onClick={() => handleClick(index)}>REMOVE</RemoveButton>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </Price>
              </Product>
            ))}
            <Hr />
          </Info>
                
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>{`$${total}`}</SummaryItemPrice>
                    </SummaryItem>
                     <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$5.99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>-$5.99</SummaryItemPrice>
                    </SummaryItem>
                     <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>{`$${total}`}</SummaryItemPrice>
                    </SummaryItem>
                    
                    <StripeCheckout 
                        name="Ginkgo Ivy Design"
                        image= "https://i.etsystatic.com/iusa/295af6/91124600/iusa_400x400.91124600_jrw7.jpg?version=0"
                        billingAddress
                        shippingAddress
                        description ={`Your total is  $${cart.total}`}
                        amount={cart.total * 100}
                        token={onToken}
                        stripeKey=  {Key}
                    >
                        <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>

                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}
export default Cart