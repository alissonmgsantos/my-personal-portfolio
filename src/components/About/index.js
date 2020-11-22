import React, { useContext } from 'react';
import LanguageContext from '../../contexts/language';
import { useQueryAbout } from '../../hooks/about';
import { useQueryHome } from '../../hooks/home';
import locale from '../../locale';
import Image from '../Image';

const About = () => {
  const info = useQueryHome();
  const about = useQueryAbout();
  const { language } = useContext(LanguageContext);

  return (
    <section id="about">
      <div className="text-center">
        <h1 className="m-10 font-extrabold text-gray-900">
          {locale[language].about}
        </h1>
      </div>
      <div className="xs:mx-auto sm:mx-20 lg:mx-48">
        <p class="italic text-xl" align="justify">
          {about[language].data.bio}
        </p>
      </div>
      <div className="flex flex-wrap pt-5 items-center justify-center">
        <div className="flex flex-row items-center justify-center">
          <a
            href={info[language].data.linkedin}
            target="_blank"
            rel="noreferrer">
            <Image src="linkedin" width="48" height="48" />
          </a>
          <a href={info[language].data.github} target="_blank" rel="noreferrer">
            <Image src="github" width="48" height="48" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
