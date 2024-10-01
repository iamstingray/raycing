import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  padding: 1rem 2rem;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(13, 13, 13, 0.9)' : 'transparent')};
  transition: background-color 0.3s ease;
  z-index: 999;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper scrolled={scrolled}>
      {/* Logo and navigation */}
    </HeaderWrapper>
  );
};

export default Header;