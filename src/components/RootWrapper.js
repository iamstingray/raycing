import React, { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import SplashScreen from './SplashScreen';

const RootWrapper = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      <GlobalStyles />
      {showSplash ? (
        <SplashScreen onAnimationComplete={handleAnimationComplete} />
      ) : (
        children
      )}
    </>
  );
};

export default RootWrapper;