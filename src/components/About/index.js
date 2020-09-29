import React, { useContext } from 'react';
import UserContext from '../../contexts/user';

const About = () => {
  const { user } = useContext(UserContext);

  const photo = 'https://source.unsplash.com/random';

  const findImage = image => {
    return require(`../../images/skills/${image.trim()}.svg`);
  };

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center bg-gray-200 pt-10">
      <div id="_about" className="p-10 ">
        <h1 className="font-semibold text-center">About</h1>
        <div className="flex flex-wrap pt-10">{user.bio}</div>
      </div>

      <div id="services" className="w-full p-10">
        <h1 className="font-semibold text-center uppercase">My Services</h1>
        <div className="flex flex-wrap pt-10">
          {user.services.map((item, key) => (
            <div key={key} className="w-full sm:w-1/3 p-2">
              <div className="service-box">
                <span className="after"></span>
                <span className="before"></span>
                <div className="flex flex-col justify-center items-center text-center">
                  <img
                    className="h-20 w-20 rounded-full"
                    src={photo}
                    alt="User profile."
                  />
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>
                    {item.description.split(',').map((item, key) => (
                      <span
                        key={key}
                        className="rounded-full bg-blue-300 px-2 py-1 text-xs mr-3">
                        {item}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="skills" className="skills-area p-10 lg:p-20">
        <h1 className="font-semibold text-center uppercase text-white">
          Skills
        </h1>

        <div className="flex flex-wrap pt-10">
          {user.hard_skills.split(';').map((item, key) => (
            <div key={key} className="flex w-1/5 p-2 justify-center">
              <img
                key={key}
                src={findImage(item)}
                alt={item}
                width="72"
                height="72"
              />
            </div>
          ))}
        </div>

        {/* <div className="flex flex-wrap pt-10">
          {user.skills_progress.map((item, key) => (
            <div key={key} className="w-full sm:w-1/2 p-2 sm:pr-10 sm:pl-10">
              <div
                className="skillbar text-white"
                data-percent={`${item.value}%`}>
                <div className="flex flex-row justify-between">
                  <h3>{item.name}</h3>
                  <h3>{item.value}%</h3>
                </div>

                <div className="skillbar-bar">
                  <div
                    className="skillbar-child"
                    style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default About;
