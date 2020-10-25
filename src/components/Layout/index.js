import PropTypes from 'prop-types';
import React, { Suspense, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../../styles/global.css';
import Header from '../Header';

const Layout = ({ children }) => {
  const [scrollPosition, setSrollPosition] = useState(0);

  return (
    <Suspense fallback={<div />}>
      <Header scrollPosition={scrollPosition} />
      <PerfectScrollbar
        onScrollY={container =>
          setSrollPosition(prevState => container.scrollTop)
        }>
        <main className="h-screen">{children}</main>
      </PerfectScrollbar>
    </Suspense>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
