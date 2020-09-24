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
    <div className="wrapper">
      <div
        style={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}>
        <img
          src={photo}
          alt="User profile."
          style={{
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '5px solid #fff',
            display: 'inline-block',
          }}
        />
        <h2 style={{ color: '#fff' }}>Alisson Matos</h2>
        <p className="cursor">{skill}</p>
      </div>
    </div>
  );
};
