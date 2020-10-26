import React, { useContext } from 'react';
import LanguageContext from '../../contexts/language';
import { useQueryAbout } from '../../hooks/about';
import locale from '../../locale';

const About = () => {
  const info = useQueryAbout();
  const { language } = useContext(LanguageContext);

  return (
    <section id="about">
      <div id="_about">
        <h1 className="mt-2 font-extrabold text-gray-900">
          {locale[language].about}
        </h1>
        <div className="flex flex-wrap pt-10">{info[language].data.bio}</div>
      </div>
    </section>
  );
};

export default About;
