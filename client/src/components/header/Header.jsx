import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {MdSearch} from 'react-icons/md'
import HeaderLogoImg from '../../assets/header/headerLogo.svg.svg'
import colorpalette from '../../styles/colorpalette';


const SecondChildData = ['About','Products','For Teams'];
const ThirdChildData = ['Log in','Sign up'];


const Header = () => {
    return (
        <HeaderContainer>
            <FirstChild className='headerLogo'>
                <Link to='/'><img src={HeaderLogoImg}/></Link>
            </FirstChild>
            <SecondChild>
                <ul>
                {SecondChildData.map((data,index)=><li key={index}><a>{data}</a></li>)}
                </ul>
                <form className="header-search">
                    <SearchWrapper>
                        <input type='text' placeholder='Search...'></input>
                        <MdSearch className='header-search_icon'/>
                    </SearchWrapper>
                </form>
            </SecondChild>
            <ThirdChild>
                <ul>
        
                    <UserButton className='loginBtn'>
                        <Link to ="/login">{ThirdChildData[0]}</Link>
                    </UserButton>

                    <UserButton className='signUpBtn'>
                        <Link to ="/signup">{ThirdChildData[1]}</Link>
                    </UserButton>
                </ul>
            </ThirdChild>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    & div{
        align-items: center;
    }
    & .headerLogo:hover{
        background-color: ${colorpalette.headerGrayHoverColor};
    }
    padding:0 124px;
    height: 3.438rem;
    border-top:3px solid ${colorpalette.signatureColor};
    border-bottom:1px solid ${colorpalette.headerBorderBttom};
`
const FirstChild = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & img{
        width:9rem;
        height:1.8rem;
        cursor: pointer;
    }
    padding:10px;
    
`
const SecondChild = styled.div`
    display: flex;
    & ul{
        display: flex;
        width:30%;
    }
    & li{
        display: flex;
        align-items: center;
        margin:8px;
        padding:5px 10px;
        border-radius: 20px;
    }
    & li:hover{
        background-color: ${colorpalette.headerGrayHoverColor};
        color:${colorpalette.headerHoverFontcolor};
    }
    & a{
        color:${colorpalette.headerFontColor};
        font-size:${colorpalette.headerFontSize};
        cursor: pointer;
    }
    & .header-search{
        position:relative;
        width:700px;
    }
    & input{
        border:none;
        border: 1px solid ${colorpalette.headerSearchBorderColor};
        border-radius:${colorpalette.headerBorderRadius};
        padding:8px 10px;
        padding-left:30px;
        width:655px;
    }
    & input:focus{
        outline:none !important;
        border-color: ${colorpalette.headerSearchBorderFocusColor};
        box-shadow: 0 0 10px ${colorpalette.headerSearchBorderShadowColor};
    }

`
const SearchWrapper = styled.div`
    & .header-search_icon{
        color:${colorpalette.headerSearchIconColor};
        width:25px;
        height: 25px;
        position:absolute;
        left:0;
        bottom:5px;
        left:5px;
    }
`
const ThirdChild = styled.div`

    & ul{
        display: flex;
    }

    & .loginBtn{
        border: 1px solid ${colorpalette.headerLoginFontColor};
        background-color: ${colorpalette.headerLoginColor};
        color:${colorpalette.headerLoginFontColor};
    }
    & .loginBtn:hover{
        background-color: ${colorpalette.headerLoginHoverColor};
    }
    & .signUpBtn{
        border: 1px solid ${colorpalette.headerSignUpBorderColor};
        background-color: ${colorpalette.headerSignUpColor};
        color:${colorpalette.signatureWhite};
    }
    & .signUpBtn:hover{
        background-color: ${colorpalette.headerSignUpHoverColor};
    }
`
const UserButton = styled.li`
    width:70px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:${colorpalette.headerFontSize};
    margin-right: 0.625rem;
    border-radius: 3px;
    padding:3px;
    cursor: pointer;

`

export default Header;