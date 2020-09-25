import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import '../../styles/global.css';

const Layout = ({ children }) => {
  const [scrollPosition, setSrollPosition] = useState(window.pageYOffset || 0);

  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setSrollPosition(prevSate => window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header author={author || 'Author'} scrollPosition={scrollPosition} />
      <main className="h-screen">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
