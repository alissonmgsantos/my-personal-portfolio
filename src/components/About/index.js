import React, { useContext } from 'react';
import LanguageContext from '../../contexts/language';
import UserContext from '../../contexts/user';

const About = () => {
  const { language } = useContext(LanguageContext);
  const user = useContext(UserContext);

  const photo = 'https://source.unsplash.com/random';
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center bg-gray-200 pt-10">
      <div id="_about" className="p-10 lg:p-20">
        <h1 className="font-semibold text-center">About</h1>
        <div className="flex flex-wrap pt-10">{user[language].bio}</div>
      </div>

      <div id="services" className="p-10 lg:p-20">
        <h1 className="font-semibold text-center uppercase">My Services</h1>
        <div className="flex flex-wrap pt-10">
          {[1, 2, 3].map((item, key) => (
            <div key={key} className="w-full sm:w-1/3 p-2">
              <div className="service-box">
                <span className="after"></span>
                <span className="before"></span>
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="h-20 w-20 rounded-full"
                    src={photo}
                    alt="User profile."
                  />
                  <h2 className="font-semibold">Web Develop</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut, id laboriosam maxime nam neque nulla placeat quam
                    repudiandae similique ullam?
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
            <div key={key} className="w-full sm:w-1/2 p-2 sm:pr-10 sm:pl-10">
              <div className="skillbar text-white" data-percent="95%">
                <div className="flex flex-row justify-between">
                  <h3>HTML5</h3>
                  <h3>95%</h3>
                </div>

                <div className="skillbar-bar">
                  <div
                    className="skillbar-child"
                    style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
