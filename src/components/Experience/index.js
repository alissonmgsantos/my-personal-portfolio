import React, { useContext } from 'react';
import LanguageContext from '../../contexts/language';
import locale from '../../locale';

const Experience = () => {
  const { language } = useContext(LanguageContext);
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
      </div>

      <div className="p-10">
        <ul className="md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-10">
          <li>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Analista Desenvolvedor
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Solutis Tecnologias
                </p>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg leading-6 font-medium text-gray-900">
                  Analista Desenvolvedor
                </h4>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Solutis Tecnologias
                </p>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
