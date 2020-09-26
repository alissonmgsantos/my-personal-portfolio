import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from '../../contexts/user';

import Header from '../Header';
import '../../styles/global.css';

const Layout = ({ children }) => {
  const [scrollPosition, setSrollPosition] = useState(window.pageYOffset || 0);
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setSrollPosition(prevSate => window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <UserProvider>
      <Header scrollPosition={scrollPosition} />
      <main className="h-screen">{children}</main>
    </UserProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
