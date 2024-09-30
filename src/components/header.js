import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgba(13, 13, 13, 0.8);
  padding: 1rem 2rem;
`;

const Logo = styled.h1`
  color: #ffffff;
  margin: 0;
`;

const Header = () => (
  <HeaderWrapper>
    <Logo>Team RaYcing</Logo>
  </HeaderWrapper>
);

export default Header;