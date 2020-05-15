import React from 'react';
import { LayoutWrapper, Wrapper } from './style';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Sidenav from './components/Sidenav';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidenav username="Alisson" />
      <PerfectScrollbar>
        <Wrapper>{children}</Wrapper>
      </PerfectScrollbar>
    </LayoutWrapper>
  );
};

export default Layout;
