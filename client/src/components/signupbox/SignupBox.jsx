import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/footer/logo3.svg';
import googlelogo from '../../assets/oauth/googlelogo.svg';


const SignupBox = () => {
    return (
      <AllContainer>
        <OauthBtn><img src={googlelogo}></img>Sign up with Google</OauthBtn>
        <InputContainer>
          <SmallContainer>
          <TextBox For="DisplayName">Display name</TextBox>
          <InputBox id="DisplayName"></InputBox>
          </SmallContainer>
          <SmallContainer>
          <TextBox For="Email">Email</TextBox>
          <InputBox id="Email"></InputBox>
          </SmallContainer>
          <SmallContainer>
          <TextBox For="Password">Password</TextBox>
          <InputBox id="Password"></InputBox>
          </SmallContainer>
         <Expainbox>Passwords must contain at least eight
            characters, including at least 1 letter and 1
            number.
        </Expainbox>
          <SignupBtn>Sign up</SignupBtn>
          <Expainbox>By clicking "Sign up", you agree to our terms of
            service and acknowledge that you have read
            and understand our privacy policy and code of
            conduct
          </Expainbox>
        </InputContainer>
        </AllContainer>
    );
  };

const AllContainer = styled.div`
  height: 700px;
  width: 100%;
  background-color: rgba(242, 243, 243, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Expainbox = styled.div`
  width: 197px;
  height: 150px;
  margin-top: 3px;
  margin-bottom: 20px;
  font-size: 10px;
  margin-left: 26px;
  color: gray;
`

const OauthBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: black;
  width: 250px;
  height: 40px;
  border: solid 1px #a5a5a5;
  background-color: white;
  margin-bottom: 30px;  
  cursor: pointer;
  
  &:hover{
    background-color: #f3f3f3;
  }
  &:active{
    box-shadow: 0px 0px 1px 5px #dcdcdc;
  }
  img{
    height: 17px;
    width: 17px;
    padding-right: 3px;
  }
`

const InputContainer = styled.div`
    width: 250px;
    height: 500px;
    border-radius: 6px;
    background-color: white;
    box-shadow: 1px 1px 2px 2px rgb(229, 229, 229);

`

const SmallContainer = styled.div`
  padding-top: 17px;
  margin-left: 25px;
`
const TextBox = styled.label`
    font-weight: 400;
`
const InputBox = styled.input`
  width: 190px;
  height: 25px;
`
const SignupBtn = styled.button`
  width: 200px;
  height: 35px;
  margin-top: 17px;
  margin-left: 23px;
  margin-bottom: 20px;
  color : white;
  background-color: rgba(29, 154, 249, 1);
  border: none;
  border-radius: 3px;
  box-shadow: inset 0px 2px 0px 0px rgba(119, 194, 251, 1);
  cursor: pointer;
  &:hover {
	background-color:rgba(49, 114, 198, 1);
  &:active {
	box-shadow: 0px 0px 1px 3px #aedcff;
}

}
`
export default SignupBox;
  