import React, { useContext, useState } from 'react';
import { routes } from '../../constants';
import LanguageContext from '../../contexts/language';
import { useQueryHome } from '../../hooks/home';
import locale from '../../locale';
import Image from '../Image';

const Header = ({ scrollPosition }) => {
  const info = useQueryHome();
  const { language, languageOptions, handleLanguage } = useContext(
    LanguageContext
  );
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
          <a href="/" className="font-semibold text-3xl">
            {info[language].data.username.split(' ')[0]}
          </a>
        </div>

        <div
          className={`${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto`}>
          <div className="text-sm">
            {routes[0][language].map((route, key) => (
              <a
                key={key}
                href={route.path}
                className="block p-3 text-sm font-semibold lg:inline-block hover:text-blue-500 uppercase"
                onClick={() => setIsOpen(prevState => !prevState)}>
                {route.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex pl-5 pr-5">
          <button
            type="button"
            className="w-full focus:outline-none"
            id="options-menu"
            onClick={() => setShow(prevState => !prevState)}>
            <Image src={language} width="24" height="24" />
          </button>

          <div
            className={`${
              show ? 'block' : 'hidden'
            } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg`}>
            <div className="rounded-md bg-white shadow-xs">
              <div className="py-1">
                {languageOptions.map((item, key) => (
                  <button
                    key={key}
                    onClick={() => [
                      handleLanguage(item),
                      setShow(prevState => !prevState),
                    ]}
                    className="w-full flex items-center text-gray-700 px-4 py-2 hover:bg-gray-100 hover:text-gray-900 focus:outline-none">
                    <Image src={item} width="24" height="24" />
                    {locale[language][item]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(prevState => !prevState)}
            className={`${
              scrollPosition <= 30 ? 'text-white' : 'text-black'
            } flex items-center px-3 py-2 border rounded`}>
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

export default Header;
