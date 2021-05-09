import { Moon, Sun } from '@styled-icons/fa-solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../../themes';
import { Text } from '../components/shared';
import { useLanguage } from '../providers/language';
import {
  FloatButton,
  LayoutMain,
  LayoutWrapper,
  NavBar,
  Wrapper,
} from './styled';

const Layout = ({ children }) => {
  const { language, languageOptions, toggleLanguage } = useLanguage();
  const [scrollPosition, setSrollPosition] = useState(0);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const UI_THEME = localStorage.getItem('UI_THEME');
    setTheme(prevSate => UI_THEME || 'light');
  }, []);

  const toggleTheme = () => {
    if (theme == 'light') {
      localStorage.setItem('UI_THEME', 'dark');
      return setTheme(prevState => 'dark');
    }
    localStorage.setItem('UI_THEME', 'light');
    return setTheme(prevState => 'light');
  };

  const menu = useState({
    portuguese: [
      { name: 'Início', href: '#home' },
      { name: 'Sobre', href: '#about' },
      { name: 'Experiência', href: '#experience' },
      { name: 'Portfólio', href: '#portfolio' },
    ],
    english: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Portfolio', href: '#portfolio' },
    ],
  })[0];

  return (
    <ThemeProvider theme={theme == 'light' ? light : dark}>
      <LayoutWrapper>
        <FloatButton onClick={toggleTheme}>
          {theme == 'light' ? <Sun width={32} /> : <Moon width={32} />}
        </FloatButton>
        <NavBar scrollPosition={scrollPosition}>
          <Text size="2rem" weight={600}>
            Alisson
          </Text>

          <Wrapper>
            {menu[language].map((item, key) => (
              <Link href={item.href} key={key}>
                <Text weight={500}>{item.name}</Text>
              </Link>
            ))}

            {languageOptions.map((language, key) => (
              <Image
                key={key}
                src={`/images/language/${language}.svg`}
                width={24}
                height={24}
                onClick={() => toggleLanguage(language)}
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
    </ThemeProvider>
  );
};
export default Layout;
