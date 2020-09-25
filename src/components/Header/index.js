import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { routes } from '../../constants';

const Header = ({ author }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-transparent p-6 z-50 absolute w-full">
      <nav className="flex items-center justify-between flex-wrap lg:pl-10 lg:pr-10">
        <div className="text-white">
          <h2 className="font-semibold">{author}</h2>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(prevState => !prevState)}
            className="flex items-center px-3 py-2 border rounded text-white">
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
          className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto`}>
          <div className="text-sm">
            {routes.map((route, key) => (
              <Link
                key={key}
                to={route.path}
                className="block p-3 text-sm lg:inline-block hover:text-teal-200 text-white uppercase">
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
