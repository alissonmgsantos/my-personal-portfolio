import React, { useContext, useState } from 'react';
import LanguageContext from '../../contexts/language';
import { useQueryExperience } from '../../hooks/experience';
import locale from '../../locale';
import Image from '../Image';

const Experience = () => {
  const info = useQueryExperience();
  const { language } = useContext(LanguageContext);
  const [checked, setChecked] = useState('JOB');
  const options = ['ACADEMIC', 'JOB'];
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
              <span
                onClick={() => setChecked(prevState => item)}
                className={`${
                  checked === item
                    ? 'bg-blue-500 text-white'
                    : 'text-blue-500 hover:border-gray-200 text-blue-500 hover:bg-gray-200'
                } inline-block border  rounded py-1 px-3 cursor-pointer`}>
                {locale[language][item.toLowerCase()].toLocaleUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <ul className="md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-10">
          {info[language].map((item, key) => {
            if (item.type.toLocaleUpperCase() === checked.toLocaleUpperCase()) {
              return (
                <li key={key} className="p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <Image
                          src={item.type.toLowerCase()}
                          width="48"
                          height="48"
                        />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-medium text-gray-900">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-base leading-6 text-gray-500">
                        {item.subTitle}
                      </p>
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
                </li>
              );
            }
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
