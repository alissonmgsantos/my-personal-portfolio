import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useLanguage } from '../providers/language';
import {
  Brand,
  LayoutMain,
  LayoutWrapper,
  LinkText,
  NavBar,
  Wrapper,
} from './styled';

const Layout = ({ children }) => {
  const { language, languageOptions, handleLanguage } = useLanguage();
  const [scrollPosition, setSrollPosition] = useState(0);

  const menu = useState({
    portuguese: [
      { name: 'Início', href: '#home' },
      { name: 'Sobre', href: '#about' },
      { name: 'Experiências', href: '#experience' },
      { name: 'Portfólio', href: '#portfolio' },
    ],
    english: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Experiences', href: '#experience' },
      { name: 'Portfolio', href: '#portfolio' },
    ],
  })[0];

  return (
    <LayoutWrapper>
      <NavBar scrollPosition={scrollPosition}>
        <Brand>Alisson</Brand>
        <Wrapper>
          {menu &&
            menu[language].map((item, key) => (
              <Link href={item.href} key={key}>
                <LinkText>{item.name}</LinkText>
              </Link>
            ))}
        </Wrapper>
        <Wrapper>
          {languageOptions.map((language, key) => (
            <Image
              key={key}
              src={`/images/language/${language}.svg`}
              width={24}
              height={24}
              onClick={() => handleLanguage(language)}
            />
          ))}
        </Wrapper>
      </NavBar>
      <PerfectScrollbar
        onScrollY={container =>
          setSrollPosition(prevState => container.scrollTop)
        }>
        <LayoutMain>{children}</LayoutMain>
      </PerfectScrollbar>
    </LayoutWrapper>
  );
};
export default Layout;
