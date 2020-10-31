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
          {locale[language].hardSkills}
        </h1>
      </div>
      <div className="flex flex-wrap">
        {info[language].data.skills.map((item, key) => (
          <div
            key={key}
            className="flex md:w-1/5 pt-10 justify-center"
            title={item.toUpperCase()}>
            <Image key={key} src={item} width="70" height="70" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
