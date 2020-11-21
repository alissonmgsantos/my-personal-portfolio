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

        <ul
          className="flex item-center justify-center m-5 mb-10"
          role="presentation">
          {options.map((item, key) => (
            <li key={key} className="mr-3">
              <button
                onClick={() => setChecked(prevState => item)}
                className={`${
                  checked === item
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-500 hover:border-gray-200 text-blue-500 hover:bg-gray-200'
                } border rounded py-1 px-3 uppercase`}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-flow-cols xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-y-10">
        {info
          .filter(value => value.type === checked)
          .map((item, key) => (
            <div className="rounded bg-white rounded-t-lg overflow-hidden shadow max-w-xs my-3">
              <img
                src={item.image}
                className="card-portfolio-image"
                alt={item.title}
              />
              <div className="text-center px-3 p-2">
                <h2 className="text-black text-lg font-extrabold">
                  {item.title}
                </h2>
                <div className="text-center m-1">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-1 py-1 text-xs font-semibold text-gray-700 mr-3">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center pb-3">
                {item.preview && (
                  <a
                    href={item.preview}
                    target="_blank"
                    rel="noreferrer"
                    title="Preview">
                    <Image src="preview" width="24" height="24" />
                  </a>
                )}
                {item.repository && (
                  <a
                    href={item.repository}
                    target="_blank"
                    rel="noreferrer"
                    title="Github">
                    <Image src="github" width="24" height="24" />
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
