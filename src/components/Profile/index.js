import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../contexts/language';
import UserContext from '../../contexts/user';

export const Profile = () => {
  const user = useContext(UserContext);
  const { language } = useContext(LanguageContext);
  const photo = 'https://source.unsplash.com/random';
  const [loop, setLoop] = useState(0);
  const [skill, setSkill] = useState(user[language].skills[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoop(prevState => prevState + 1);
      setSkill(prevState => '');
      user[language].skills[loop % user[language].skills.length]
        .split('')
        .map((letra, i) =>
          setTimeout(() => setSkill(prevState => (prevState += letra)), 75 * i)
        );
    }, 2000);
    return () => clearInterval(interval);
  }, [user[language].skills, skill, loop]);

  return (
    <div className="flex flex-col justify-center items-center relative z-10 h-full">
      <img
        className="h-48 w-48 rounded-full border-white border-8 m-6"
        src={photo}
        alt="User profile."
      />
      <h1 className="font-semibold text-white">{`${user.name.split(' ')[0]} ${
        user.name.split(' ')[user.name.split(' ').length - 1]
      }`}</h1>
      <h3 className="cursor">{skill}</h3>
    </div>
  );
};
