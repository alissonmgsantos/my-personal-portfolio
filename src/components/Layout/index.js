import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from '../../contexts/user';

import Header from '../Header';
import '../../styles/global.css';
import { LanguageProvider } from '../../contexts/language';

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
      <LanguageProvider>
        <Header scrollPosition={scrollPosition} />
        <main className="h-screen">{children}</main>
      </LanguageProvider>
    </UserProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
