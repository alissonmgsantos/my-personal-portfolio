import React, { useEffect, useState } from 'react';

export const Profile = () => {
  const photo = 'https://source.unsplash.com/random';
  const skills = ['Front-end Developer', 'Back-end Developer'];
  const [loop, setLoop] = useState(0);
  const [skill, setSkill] = useState(skills[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoop(prevState => prevState + 1);
      const textoArray = skills[loop % skills.length].split('');
      setSkill(prevState => '');
      textoArray.map((letra, i) =>
        setTimeout(() => setSkill(prevState => (prevState += letra)), 75 * i)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [skills, skill, loop]);

  return (
    <div className="flex flex-col justify-center items-center relative z-10 h-full">
      <img
        className="h-48 w-48 rounded-full border-white border-8 m-6"
        src={photo}
        alt="User profile."
      />
      <h1 className="font-semibold text-white">Alisson Matos</h1>
      <h3 className="cursor">{skill}</h3>
    </div>
  );
};
