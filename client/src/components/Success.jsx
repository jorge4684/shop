
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  margin-left: 25%;
  height: 100vh;
  width: 40%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
 
`;

/*const InputTest = styled.div`
  margin-top: 20px;
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;*/

const Input = styled.input`
 
  border: none;
  flex: 8;
  padding-left: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: green;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  border-radius: 5%;
`;
const Success = () => {
    return (
        <Container>
         <InputContainer>
         <Button>Successfull.</Button>
        </InputContainer>
        <InputContainer>
        <Input placeholder="Your order is Being prepared. Thanks for choosing Fast Shop" />
        </InputContainer>
        </Container>
    )
}

export default Success
