import React, { useState } from 'react';
import styled from 'styled-components';
import googlelogo from '../../assets/oauth/googlelogo.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SignupBox = () => {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {replace} = useNavigate();

 
    
    
    const register = () =>{
      var pw = password;
      var num = pw.search(/[0-9]/g);
      var eng = pw.search(/[a-z]/ig);
      var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
   
    if(pw.length < 8 || pw.length > 20 || email === ""){
     console.log(" 비밀번호 8자리 ~ 20자리 이내로 입력해주세요.");
     return false;
    }else if(pw.search(/\s/) != -1){
     return false;
    }else if( (num < 0 && eng < 0) || (eng < 0 && spe < 0) ){
     console.log("영문,숫자 혼합하여 입력해주세요.");
     return false;
    }else {
       axios
      .post('http://localhost:1337/api/auth/local/register', {
        username: displayName,
        email: email,
        password: password,
      })
      .then(response => {
        // Handle success.
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
    
        replace("/")
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
      }
    }
    
  
   

  

    return (
      <AllContainer>
        <OauthBtn><img src={googlelogo}></img>Sign up with Google</OauthBtn>
        <InputContainer>
          <SmallContainer>
          <TextBox For="DisplayName">Display name</TextBox>
          <InputBox id="DisplayName" value={displayName} onChange={(event) => {setDisplayName(event.target.value)}}></InputBox>
          </SmallContainer>
          <SmallContainer>
          <TextBox For="Email">Email</TextBox>
          <InputBox id="Email" value={email} onChange={(event) => {setEmail(event.target.value)}}></InputBox>
          </SmallContainer>
          <SmallContainer>
          <TextBox For="Password">Password</TextBox>
          <InputBox type="password" id="Password" value={password} onChange={(event) => {setPassword(event.target.value)}}/>
          </SmallContainer>
         <Expainbox>Passwords must contain at least eight
            characters, including at least 1 letter and 1
            number.
        </Expainbox>
          <SignupBtn onClick={() => {register()}}>Sign up</SignupBtn>
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
  