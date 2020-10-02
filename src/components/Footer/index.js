import React, { useContext } from 'react';
import UserContext from '../../contexts/user';

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer id="footer" className="flex flex-col justify-center items-center">
      <p className="font-black uppercase tracking-wider">{`${
        user.name.split(' ')[0]
      } ${user.name.split(' ')[user.name.split(' ').length - 1]}`}</p>
      <small className="italic">
        {`Copyright © ${new Date().getFullYear()}`} All rights reserved. ®
      </small>
    </footer>
  );
};

export default Footer;
