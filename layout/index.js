import React from 'react';
import { LayoutMain, LayoutWrapper } from './styled';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {/* <p>{attributes.hero_title}</p> */}
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
};

export default Layout;
