// import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import { useState,useEffect } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom';

// const Key= "pk_test_51Ns8IODUWs3a2tCaxmkGpCzjcyneEoBYW0Lmi4ytHE73r69lHl1XAfoDV8vvo0RmCg1JubClxeApsAc5HOeYTAcQ00EWKnUeZi"

// const Pay = () =>{
//     const [stripeToken, setStripeToken]=useState(null);
//     const history = useHistory();
//     const onToken=(token)=>{
//         setStripeToken(token);
//     };
//     useEffect(() => {
//      const makeRequest = async()=>{
//         try{
//             const res = await axios.post(
//                 "http://localhost:5000/api/checkout/payment",
//             {
//                 tokenId:stripeToken.id,
//                 amount:2000,
//             }
//             );
//             console.log(res.data);
//             history.push("/success")
//                 }catch(err){
//                     console.log(err);
//         }
//      };
//      stripeToken && makeRequest();
//     }, [stripeToken, history]);
    
//     return(
//         <div
//         style ={{
//             height:"100vh",
//             display:"felx",
//             alignItems:"center",
//             justifyContent: "center",
//         }}
//         >
//             {stripeToken ? (<span>Processing. Please wait...</span>) : (

//             <StripeCheckout 
//             // name="Ginkgo Ivy Design"
//             // image= "https://i.etsystatic.com/iusa/295af6/91124600/iusa_400x400.91124600_jrw7.jpg?version=0"
//             // billingAddress
//             // shippingAddress
//             // description ="Your total is $20"
//             // amount={2000}
//             // token={onToken}
//             // stripeKey=  {Key}
//             >
//         <button
//         style={{
//             border:"none",
//             width:120,
//             borderRadius: 5,
//             padding:"20px",
//             backgroundColor:"black",
//             color:"white",
//             fontWeight:"600",
//             cursor:"pointer",
//         }}
//         >
//         Pay Now
//         </button>
//         </StripeCheckout>
//         )}
//         </div>
//     );
// };
// export default Pay;