import React, { useContext } from 'react';
import LanguageContext from '../../contexts/language';
import UserContext from '../../contexts/user';
import locale from '../../locale';

const About = () => {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  const findImage = image => {
    return require(`../../images/skills/${image.trim()}.svg`);
  };

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center bg-gray-200 pt-10">
      <div id="_about" className="p-10 ">
        <h1 className="font-semibold text-center">{locale[language].about}</h1>
        <div className="flex flex-wrap pt-10">{user.bio}</div>
      </div>

      <div id="skills" className="skills-area p-10 lg:p-20">
        <h1 className="font-semibold text-center text-white">
          {locale[language].skills}
        </h1>
        <div className="flex flex-wrap pt-10">
          {user.hard_skills.split(';').map((item, key) => (
            <div key={key} className="flex w-1/5 p-2 justify-center">
              <img
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
