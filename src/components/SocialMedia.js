import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaDiscord } from 'react-icons/fa';

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const IconLink = styled.a`
  color: #ffffff;
  font-size: 2rem;

  &:hover {
    color: #c71585;
  }
`;

const SocialMedia = () => (
  <SocialWrapper>
    <IconLink href="https://instagram.com/yourprofile" target="_blank" aria-label="Instagram">
      <FaInstagram />
    </IconLink>
    <IconLink href="https://discord.gg/yourdiscordinvite" target="_blank" aria-label="Discord">
      <FaDiscord />
    </IconLink>
  </SocialWrapper>
);

export default SocialMedia;