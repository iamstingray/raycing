import React from 'react';
import GlobalStyles from './src/components/GlobalStyles';

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
);