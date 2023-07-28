import React from 'react';
import logo from '../../assets/footer/logo3.svg';
import styled from 'styled-components';

function Footer() {
  const stackOverFlowMenu = ['Questions', 'Help'];
  const productsMenu = ['Teams', 'Advertising', 'Collectives', 'Talent'];
  const company = [
    'About',
    'Press',
    'Work Here',
    'Legal',
    'Privacy Policy',
    'Terms of Service',
    'Contact Us',
    'Cookie Settings',
    'Cookie Policy',
  ];
  const stackExchangeNetwork = [
    'Technology',
    'Culture & recreation',
    'Life & arts',
    'Science',
    'Professional',
    'Business',
    'API',
    'Data',
  ];
  const snsMenu = ['blog', 'Facebook', 'Twitter', 'linkedin', 'Instagram'];
  return (
    <FooterBox>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu1">
          <h5>STACK OVERFLOW</h5>
          <ul>
            {stackOverFlowMenu.map(item => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu2">
          <h5>PRODUCTS</h5>
          <ul>
            {productsMenu.map(item => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu3">
          <h5>COMPANY</h5>
          <ul>
            {company.map(item => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu4">
          <h5>STACK EXCHANGE NETWORK</h5>
          <ul>
            {stackExchangeNetwork.map(item => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu5">
          <ul>
            {snsMenu.map(item => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under CC BY-SA. rev 2023.6.15.43492
          </p>
        </div>
      </div>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: #232629;
  color: #f7eded;
  width: 100%;
  bottom: 0;
  gap: 10px;
  z-index: 3;
  img {
    width: 44px;
    height: 44px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      margin: 4px 0;
    }
    span {
      text-decoration: none;
      color: #80878e;
      &:hover {
        color: #f7eded;
      }
    }
  }
  .footer-content {
    margin: 0;
    display: flex;
    width: 1250px;
    font-size: 13px;
    justify-content: space-around;
    margin: 22px 0px;
  }
  .menu5 {
    margin-top: -22px;
    display: flex;
    font-size: 11px;
    justify-content: space-between;
    flex-direction: column;
    width: 30%;
    color: #80878e;
    ul {
      margin: 22px 0;
    }
    li {
      display: inline;
      margin: 5px;
    }
  }
`;

export default Footer;
