import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import '../../styles/global.css';

const Layout = ({ children }) => {
  const [scrollPosition, setSrollPosition] = useState(0);
  useEffect(() => {
    setSrollPosition(prevSate => window.pageYOffset || 0);
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setSrollPosition(prevSate => window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header scrollPosition={scrollPosition} />
      <main className="h-screen">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
