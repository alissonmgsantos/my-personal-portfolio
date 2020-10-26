import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../contexts/language';
import { useQueryHome } from '../../hooks/home';

export const Profile = () => {
  const info = useQueryHome();
  const { language } = useContext(LanguageContext);

  const [loop, setLoop] = useState(0);
  const [skills, setSkills] = useState(info[language].data.skills[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoop(prevState => prevState + 1);
      setSkills(prevState => '');
      info[language].data.skills[loop % info[language].data.skills.length]
        .split('')
        .map((value, i) =>
          setTimeout(() => setSkills(prevState => (prevState += value)), 75 * i)
        );
    }, 2000);
    return () => clearInterval(interval);
  }, [info, skills, loop, language]);

  return (
    <div className="flex flex-col justify-center items-center relative z-10 h-full">
      <img
        className="h-48 w-48 rounded-full border-white border-8 m-6"
        src={info[language].data.photo}
        alt="User profile."
      />
      <h1 className="font-semibold text-white">
        {info[language].data.username}
      </h1>
      <h3 className="cursor">{skills}</h3>
    </div>
  );
};
