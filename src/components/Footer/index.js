import React, { useContext } from 'react';
import LanguageContext from '../../contexts/language';
import locale from '../../locale';
import Image from '../Image';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <footer className="md:p-10  flex flex-col items-center text-center lg:justify-between bg-gray-200">
      <h6 className="italic">
        {`Copyright © ${new Date().getFullYear()} ${locale[language].rights} ®`}
      </h6>
      <div className="flex flex-row items-center justify-center">
        <h6 className="pt-1">{locale[language].stayConnected}</h6>
        <Image src="linkedin" width="24" height="24" />
        <Image src="github" width="24" height="24" />
      </div>
    </footer>
  );
};

export default Footer;
