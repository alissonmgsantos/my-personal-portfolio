import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from '../Navigation';

const Header = ({ author }) => (
  <header
    style={{
      width: '100%',
      position: 'fixed',
      background: `transparent`,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'space-between',
      height: 80,
      zIndex: 1,
      padding: '2rem',
    }}>
    <h1
      style={{
        display: 'flex',
        flexGrow: 1,
        color: `white`,
        textTransform: 'uppercase',
      }}>
      {author}
    </h1>
    <Navigation />
  </header>
);

Header.propTypes = {
  author: PropTypes.string,
};

Header.defaultProps = {
  author: ``,
};

export default Header;
