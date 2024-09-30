import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  background: url('/images/hero-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  color: #ffffff;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
`;

const Hero = () => (
  <HeroSection>
    <HeroContent
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <HeroTitle>Team RaYcing</HeroTitle>
      <HeroSubtitle>Virtual Racing Excellence</HeroSubtitle>
    </HeroContent>
  </HeroSection>
);

export default Hero;