import React from 'react';
import { LayoutWrapper, Content } from './style';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Sidenav from './components/Sidenav';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidenav />
      <PerfectScrollbar>
        <Content>{children}</Content>
      </PerfectScrollbar>
    </LayoutWrapper>
  );
};

export default Layout;
