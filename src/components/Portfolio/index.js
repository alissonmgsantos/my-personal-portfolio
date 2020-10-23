import React, { useContext, useState } from 'react';
import LanguageContext from '../../contexts/language';
import locale from '../../locale';

const Portfolio = () => {
  const [checked, setChecked] = useState('WEB');
  const { language } = useContext(LanguageContext);
  const options = ['WEB', 'MOBILE', 'FULLSTACK'];

  return (
    <section id="portfolio">
      <div className="text-center">
        <h1 className="mt-2 font-extrabold text-gray-900">
          {locale[language].portfolio}
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
        <ul className="flex item-center justify-center mt-4">
          {options.map((item, key) => (
            <li className="mr-3" key={key}>
              <a
                className={`${
                  checked === item
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-500 hover:border-gray-200 text-blue-500 hover:bg-gray-200'
                } inline-block border  rounded py-1 px-3 cursor-pointer`}
                onClick={() => setChecked(prevState => item)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <Image /> */}

      <div className="pt-10 md:grid md:grid-cols-3 gap-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, key) => (
          <div
            key={key}
            className="m-5 max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="https://source.unsplash.com/random"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xl mb-2">Título</span>
                <span className="font-bold text-xl mb-2">GITHUB</span>
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #php
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #node
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #js
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #react
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
