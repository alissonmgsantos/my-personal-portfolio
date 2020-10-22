import React, { useContext } from 'react';
import LanguageContext from '../../contexts/language';
import { useQueryAbout } from '../../hooks/about';
import locale from '../../locale';

const About = () => {
  const info = useQueryAbout();
  const { language } = useContext(LanguageContext);

  const findImage = image => {
    return require(`../../images/skills/${image.trim()}.svg`);
  };

  return (
    <section className="skills-area flex items-center justify-center">
      <div id="skills">
        <h1 className="font-semibold text-center text-white">
          {locale[language].skills}
        </h1>
        <div className="flex flex-wrap pt-10">
          {info[language].data.skills.map((item, key) => (
            <div key={key} className="flex w-1/5 p-2 justify-center">
              <img
                title={item}
                key={key}
                src={findImage(item)}
                alt={`${item} skill`}
                width="72"
                height="72"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
