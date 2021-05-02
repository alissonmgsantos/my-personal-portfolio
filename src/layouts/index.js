import { Moon, Sun } from '@styled-icons/fa-solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../../themes';
import { useLanguage } from '../providers/language';
import {
  Brand,
  LayoutMain,
  LayoutWrapper,
  LinkText,
  NavBar,
  Wrapper,
  FloatButton,
} from './styled';

import { Text } from '../components/shared';

const Layout = ({ children }) => {
  const { language, languageOptions, handleLanguage } = useLanguage();
  const [scrollPosition, setSrollPosition] = useState(0);

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

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
    <ThemeProvider theme={theme == 'light' ? light : dark}>
      <LayoutWrapper>
        <FloatButton onClick={toggleTheme}>
          {theme == 'light' ? <Moon width={32} /> : <Sun width={32} />}
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
    </ThemeProvider>
  );
};
export default Layout;
