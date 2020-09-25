import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { routes } from '../../constants';

const Header = ({ author, scrollPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header
      className={`${
        scrollPosition <= 30
          ? 'bg-transparent absolute p-6 text-white'
          : 'bg-gray-100 fixed p-3 text-black shadow-md'
      } z-50 w-full`}>
      <nav className="flex items-center justify-between flex-wrap lg:pl-10 lg:pr-10">
        <div>
          <Link to="/" className="font-semibold text-3xl">
            {author}
          </Link>
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
                className="block p-3 text-sm font-semibold lg:inline-block hover:text-blue-500 uppercase">
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
