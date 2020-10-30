import React, { useContext, useState } from 'react';
import LanguageContext from '../../contexts/language';
import { useQueryExperience } from '../../hooks/experience';
import locale from '../../locale';
import Image from '../Image';

const Experience = () => {
  const info = useQueryExperience();
  const { language } = useContext(LanguageContext);
  const [checked, setChecked] = useState('PROFESSIONAL');
  const options = ['EDUCATIONAL', 'PROFESSIONAL'];
  return (
    <section id="experience">
      <div className="text-center">
        <h1 className="mt-2 font-extrabold text-gray-900">
          {locale[language].experiences}
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
          voluptatum cupiditate veritatis in accusamus quisquam.
        </p>
        <ul className="flex item-center justify-center m-10" role="list">
          {options.map((item, key) => (
            <li key={key} className="mr-3" role="listitem">
              <button
                onClick={() => setChecked(prevState => item)}
                className={`${
                  checked === item
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-500 hover:border-gray-200 text-blue-500 hover:bg-gray-200'
                } border rounded py-1 px-3 uppercase`}>
                {locale[language][item.toLowerCase()]}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-flow-row xs:grid-flow-col xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {info[language].map((item, key) => {
          if (
            `${item['type']}`.toLocaleUpperCase() ===
            checked.toLocaleUpperCase()
          ) {
            return (
              <div
                key={key}
                className="flex items-center justify-center margin-auto">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Image
                      src={item.type.toLowerCase()}
                      width="24"
                      height="24"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-4">
                  <h4 className="text-lg text-gray-900">{item.title}</h4>
                  <p className="text-base text-gray-500">{item.subTitle}</p>
                  <small className="text-xs text-gray-500">{item.period}</small>
                  <div className="flex-row">
                    {item.activity[0] !== '' &&
                      item.activity.map((value, key) => (
                        <span
                          key={key}
                          className="rounded-full bg-gray-300 uppercase px-2 py-1 text-xs font-bold mr-3">
                          {value}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Experience;
