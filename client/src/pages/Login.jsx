import React from 'react';
import LoginBox from '../components/loginbox/loginbox';


const Login = ({setIsLogin, setUserInfo}) => {
  return (
 <LoginBox setIsLogin={setIsLogin} setUserInfo={setUserInfo}/>
  )
};
export default Login;
