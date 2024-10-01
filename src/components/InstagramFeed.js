import React, { useEffect } from 'react';
import styled from 'styled-components';

const InstagramContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  min-height: 100vh;
  overflow: hidden; /* Hide the scrollbar */
`;

const InstagramWrapper = styled.div`
  max-width: 1065px;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden; /* Ensure the iframe doesn't cause overflow */
  flex-shrink: 0;   /* Prevent shrinking of the container */
`;

const InstagramFeed = () => {
  useEffect(() => {}, []);

  return (
    <InstagramContainer>
      <InstagramWrapper>
        <iframe
          src="https://snapwidget.com/embed/1080693"
          className="snapwidget-widget"
          allowTransparency="true"
          scrolling="no"   /* Disable internal iframe scrollbar */
          style={{
            border: "none",
            overflow: "hidden", /* Prevent internal iframe overflow */
            width: "100%",      /* Ensure the iframe takes the full width */
            height: "1065px",   /* Keep the height fixed */
            maxWidth: "1065px", /* Cap the iframe width */
          }}
          title="Posts from Instagram"
        />
      </InstagramWrapper>
    </InstagramContainer>
  );
};

export default InstagramFeed;
