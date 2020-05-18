import React, { useState } from 'react';
import { LayoutWrapper, Content } from './style';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Sidenav from './components/Sidenav';
import { Icon } from '../theme/globalStyle';

const Layout = ({ children }) => {
  const [visible, setVisible] = useState(true);
  return (
    <LayoutWrapper>
      <Sidenav username="Alisson" sidenav={visible} />
      <PerfectScrollbar>
        <Content sidenav={visible}>
          <Icon
            className="fa fa-bars fa-2x"
            onClick={() => setVisible(!visible)}
          />
          {children}
        </Content>
      </PerfectScrollbar>
    </LayoutWrapper>
  );
};

export default Layout;
