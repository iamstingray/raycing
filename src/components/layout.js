import React from 'react';
import Header from './header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;