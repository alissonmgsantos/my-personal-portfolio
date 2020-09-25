import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { routes } from '../../constants';

const Header = ({ author }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-3">
        <div className="flex items-center flex-shrink-0 text-white lg:pl-32">
          <span className="font-semibold text-xl tracking-tight">{author}</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(prevState => !prevState)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:flex lg:items-center lg:w-auto  lg:pr-32`}>
          <div className="text-sm">
            {routes.map((route, key) => (
              <Link
                to={route.path}
                key={route.path}
                className="block p-2 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  author: PropTypes.string,
};

Header.defaultProps = {
  author: ``,
};

export default Header;
