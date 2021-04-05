import { Sidenav } from './components';
import { LayoutBackground, LayoutMain, LayoutWrapper } from './styled';
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidenav />
      <LayoutBackground />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
};
export default Layout;
