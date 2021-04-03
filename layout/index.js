import { LayoutMain, LayoutWrapper } from './styled';
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <LayoutMain>{children}</LayoutMain>
    </LayoutWrapper>
  );
};
export default Layout;
