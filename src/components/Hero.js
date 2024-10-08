import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../images/logo.png'

const pulse = keyframes`
  0% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  100% {
    opacity: 0.7;
    transform: scale(1);
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  background-color: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const LogoBackground = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.7;
  animation: ${pulse} 3s ease-in-out;
  animation-iteration-count: 1;
`;

const HeroContent = styled.div`
  position: relative;
  text-align: center;
  color: #ffffff;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5); /* Add a semi-transparent background behind text */
  padding: 1rem 2rem;
  border-radius: 10px; /* Optional: Rounded corners for better aesthetics */
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const Hero = () => (
  <HeroSection>
    <LogoBackground />
    <HeroContent>
      <HeroTitle>Willkommen bei Team RaYcing</HeroTitle>
      <HeroSubtitle>Virtuelle Rennsport-Exzellenz est 2019</HeroSubtitle>
    </HeroContent>
  </HeroSection>
);

export default Hero;