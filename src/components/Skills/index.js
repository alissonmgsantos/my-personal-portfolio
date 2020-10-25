import React, { useContext } from 'react';
import LanguageContext from '../../contexts/language';
import { useQueryAbout } from '../../hooks/about';
import locale from '../../locale';
import Image from '../Image';

const About = () => {
  const info = useQueryAbout();
  const { language } = useContext(LanguageContext);

  return (
    <section className="skills-area flex flex-col items-center justify-center p-2">
      <div className="text-center">
        <h1 className="mt-2 font-extrabold text-white">
          {locale[language].skills}
        </h1>
      </div>
      <div id="skills">
        <div className="flex flex-wrap">
          {info[language].data.skills.map((item, key) => (
            <div
              key={key}
              className="flex md:w-1/5 xs:w-1/3 pt-10 justify-center"
              title={item.toUpperCase()}>
              <Image key={key} src={item} width="80" height="80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
