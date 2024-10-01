// src/components/InstagramFeed.js
import React, { useEffect } from 'react';
import styled from 'styled-components';


const InstagramContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin: 2rem 0; 
`;

const InstagramWrapper = styled.div`
  width: 50%;
`;

const InstagramFeed = () => {
  useEffect(() => {
     }, []);

  return (
    <InstagramContainer>
      <InstagramWrapper>
      <iframe
  src="https://snapwidget.com/embed/1080693"
  className="snapwidget-widget"
  allowTransparency="true"
  frameBorder="0"
  scrolling="no"
  style={{
    border: "none",
    overflow: "hidden",
    width: "765px",
    height: "510px"
  }}
  title="Posts from Instagram"
/>

      </InstagramWrapper>
    </InstagramContainer>
  );
};

export default InstagramFeed;
