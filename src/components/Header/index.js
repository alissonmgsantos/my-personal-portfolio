import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { routes } from '../../constants';
import UserContext from '../../contexts/user';
import LanguageContext from '../../contexts/language';
import flag_br from '../../images/br.svg';
import flag_us from '../../images/us.svg';

const Header = ({ scrollPosition }) => {
  const { user } = useContext(UserContext);
  const { language, handleLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <header
      className={`${
        scrollPosition <= 30
          ? 'bg-transparent absolute p-6 text-white'
          : 'bg-gray-100 fixed p-3 text-black shadow-md'
      } z-50 w-full`}>
      <nav className="flex items-center justify-between flex-wrap lg:pl-10 lg:pr-10">
        <div className="flex flex-grow">
          <Link to="/" className="font-semibold text-3xl">
            {user.name.split(' ')[0]}
          </Link>
        </div>

        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto`}>
          <div className="text-sm">
            {routes[0][language].map((route, key) => (
              <Link
                key={key}
                to={route.path}
                className="block p-3 text-sm font-semibold lg:inline-block hover:text-blue-500 uppercase">
                {route.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative inline-block pl-5 pr-5">
          <div>
            <span>
              <button
                type="button"
                className="inline-flex justify-center w-full focus:outline-none"
                id="options-menu"
                onClick={() => setShow(prevState => !prevState)}>
                <img
                  src={language === 'pt' ? flag_br : flag_us}
                  width="24"
                  height="24"
                />
              </button>
            </span>
          </div>

          <div
            className={`${
              show ? 'block' : 'hidden'
            } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg`}>
            <div className="rounded-md bg-white shadow-xs">
              <div className="py-1">
                <span
                  id="pt-br"
                  onClick={() => [
                    handleLanguage('pt'),
                    setShow(prevState => !prevState),
                  ]}
                  className="flex text-gray-700 px-4 py-2 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                  <img src={flag_br} width="24" height="24" className="mr-2" />
                  {language === 'pt' ? 'Português' : 'Portuguese'}
                </span>
                <span
                  id="en-us"
                  onClick={() => [
                    handleLanguage('en'),
                    setShow(prevState => !prevState),
                  ]}
                  // onClick={() => setShow(prevState => !prevState)}
                  className="flex text-gray-700 px-4 py-2 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                  <img src={flag_us} width="24" height="24" className="mr-2" />
                  {language === 'pt' ? 'Inglês' : 'English'}
                </span>
              </div>
            </div>
          </div>
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
