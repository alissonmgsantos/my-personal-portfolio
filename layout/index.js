import { LayoutMain, LayoutWrapper } from './styled';
import { Sidenav } from './components';
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidenav />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
};
export default Layout;
