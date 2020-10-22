import React, { useContext, useState } from 'react';
import LanguageContext from '../../contexts/language';
import locale from '../../locale';

const Portfolio = () => {
  const [checked, setChecked] = useState('WEB');
  const { language } = useContext(LanguageContext);
  const options = ['WEB', 'MOBILE', 'FULLSTACK'];

  return (
    <section id="experience">
      <div className="text-center">
        <h1 className="mt-2 font-extrabold text-gray-900">
          {locale[language].portfolio}
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
        <ul class="flex item-center justify-center mt-4">
          {options.map((item, key) => (
            <li class="mr-3">
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

      <div className="p-10"></div>
    </section>
  );
};

export default Portfolio;
