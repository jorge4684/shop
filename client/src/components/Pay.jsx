
import React from 'react'
import StripeCheckout from "react-stripe-checkout";
import { useState,useEffect } from 'react';
import { axios } from 'axios';
import { useNavigate, } from "react-router-dom";



const Key= "pk_test_42HbIBKOTKy7alxcq4VaqPUb00whsm7Aaa"
const Pay = () => {
    const [stripeToken,setStripeToken] = useState(null);
    const navigate = useNavigate();
    const onToken = (token) => {
     setStripeToken(token);
    };


    useEffect(() =>{
    const makeRequest = async () => {
        try{
         const res = await axios.post(
             "http://localhost:5000/api/checkout/payment",{
                 tokenId: stripeToken.id,
                 amount:2000,
                 
            }
             );
             console.log(res.data);
             //navigate.push("/success");
             //navigate to= ("/success");
             <navigate to="/success" /> 
        }catch(err){
            console.log(err)
        }
    };
     stripeToken && makeRequest();

    },[stripeToken, navigate]);
    return (
        <div
        style={{
            marginTop:"50vh",
            heigth: "100vh",
            display: "flex",
            alignItems:"center",
            justifyContent:"center",
        }}
        >   
            {stripeToken ? (<span>Processing. Please wait...</span>) :(

           
            <StripeCheckout 
            name="Fast Shop" 
            image='data:image/png;base64,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'
            billingAddress
            shippingAddress
            description='Your total is $30'
            amount={2000}
            token={onToken}
            stripeKey={Key}
           >
            
            <button
            style={{
                border:"none",
                width: 120,
                borderRadius: 5,
                padding:"20px",
                backgroundColor:"black",
                color: "white",
                fontWeight: "600",
                cursor:"pointer",
            }}
            >
                Pay Now

            </button>
            </StripeCheckout>
             )}
        </div>
    
    );
};

export default Pay;
