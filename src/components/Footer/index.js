import React, { useContext } from 'react';
import LanguageContext from '../../contexts/language';
import { useQueryHome } from '../../hooks/home';
import locale from '../../locale';
import Image from '../Image';

const Footer = () => {
  const info = useQueryHome();
  const { language } = useContext(LanguageContext);
  return (
    <footer className="md:p-10  flex flex-col items-center text-center lg:justify-between bg-gray-200">
      <h6 className="italic">
        {`Copyright © ${new Date().getFullYear()} ${locale[language].rights} ®`}
      </h6>
      <div className="flex flex-row items-center justify-center">
        <h6 className="pt-1">{locale[language].stayConnected}</h6>
        <a href={info[language].data.linkedin} target="_blank" rel="noreferrer">
          <Image src="linkedin" width="30" height="30" />
        </a>
        <a href={info[language].data.github} target="_blank" rel="noreferrer">
          <Image src="github" width="30" height="30" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
