import React, { useContext, useState } from 'react';
import LanguageContext from '../../contexts/language';
import { useQueryPortfolio } from '../../hooks/portfolio';
import locale from '../../locale';
import Image from '../Image';

const Portfolio = () => {
  const info = useQueryPortfolio();

  const [checked, setChecked] = useState('web');
  const { language } = useContext(LanguageContext);
  const options = ['web', 'mobile', 'fullstack'];

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
        <ul className="flex item-center justify-center m-10" role="listbox">
          {options.map((item, key) => (
            <li
              className={`${
                checked === item
                  ? 'bg-blue-500 text-white'
                  : 'text-blue-500 hover:border-gray-200 text-blue-500 hover:bg-gray-200'
              } inline-block border rounded py-1 px-3 cursor-pointer mr-3 uppercase`}
              onClick={() => setChecked(prevState => item)}
              onKeyPress={() => setChecked(prevState => item)}
              key={key}
              tabIndex={key}
              role="button">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-flow-row xs:grid-flow-col md:grid-cols-3 xs:grid-cols-1 gap-5">
        {info
          .filter(value => value.type === checked)
          .map((item, key) => (
            <div
              key={key}
              className="mb-5 w-full overflow-hidden md:max-w-sm m-auto rounded shadow"
              role="list">
              <img
                className="w-full h-48 object-center"
                src={item.image}
                alt={item.title}
              />
              <div className="px-6 py-4">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-bold text-xl">{item.title}</span>
                  <div className="flex flex-row">
                    <a
                      href={item.preview}
                      target="_blank"
                      rel="noreferrer"
                      title="Preview">
                      <Image src="preview" width="28" height="28" />
                    </a>
                    <a
                      href={item.repository}
                      target="_blank"
                      rel="noreferrer"
                      title="Github">
                      <Image src="github" width="28" height="28" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  {language === 'pt' ? item.descriptionPT : item.descriptionEN}
                </p>
              </div>
              <div className="pt-2 pb-2 text-center">
                {item.tags.map((tag, key) => (
                  <span
                    key={key}
                    className="inline-block bg-gray-200 rounded-full px-1 py-1 text-sm font-semibold text-gray-700 mr-1 mb-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
