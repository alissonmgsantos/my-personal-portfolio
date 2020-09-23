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
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        background: 'red',
      }}>
      <div
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '5px solid #fff',
          display: 'inline-block',
        }}>
        <img src={photo} alt="User profile." width="100%" height="100%" />
      </div>
      <h2>Alisson Matos</h2>
      <p className="cursor">{skill}</p>
    </div>
  );
};
