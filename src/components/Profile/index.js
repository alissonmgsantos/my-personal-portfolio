import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../contexts/language';
import { useQueryHome } from '../../hooks/home';

export const Profile = () => {
  const info = useQueryHome();
  const { language } = useContext(LanguageContext);

  const photo = 'https://source.unsplash.com/random';
  const [loop, setLoop] = useState(0);
  const [description, setDescription] = useState(
    info[language].data.description[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLoop(prevState => prevState + 1);
      setDescription(prevState => '');
      info[language].data.description[
        loop % info[language].data.description.length
      ]
        .split('')
        .map((value, i) =>
          setTimeout(
            () => setDescription(prevState => (prevState += value)),
            75 * i
          )
        );
    }, 2000);
    return () => clearInterval(interval);
  }, [description, loop, language]);

  return (
    <div className="flex flex-col justify-center items-center relative z-10 h-full">
      <img
        className="h-48 w-48 rounded-full border-white border-8 m-6"
        src={photo}
        alt="User profile."
      />
      <h1 className="font-semibold text-white">
        {info[language].data.username}
      </h1>
      <h3 className="cursor">{description}</h3>
    </div>
  );
};
