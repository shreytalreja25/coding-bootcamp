// src/components/Layout.jsx
import React from 'react';
import Header from './Header'; // Import your header component
import Footer from './Footer'; // Import your footer component (if any)

const Layout = ({ children }) => {
  return (
    <>
      <Header /> {/* Common header */}
      <main>{children}</main> {/* Main content */}
      <Footer /> {/* Common footer */}
    </>
  );
};

export default Layout;
