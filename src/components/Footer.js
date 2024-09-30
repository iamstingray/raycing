import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedia';

const FooterWrapper = styled.footer`
  background-color: #1a1a1a;
  padding: 2rem;
  text-align: center;
`;

const Footer = () => (
  <FooterWrapper>
    <SocialMedia />
    <p>&copy; {new Date().getFullYear()} Team RaYcing</p>
  </FooterWrapper>
);

export default Footer;