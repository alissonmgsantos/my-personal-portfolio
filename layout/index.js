import { Sidenav } from './components';
import { LayoutMain, LayoutWrapper } from './styled';
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidenav />
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
};
export default Layout;
