import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center bg-gray-200">
      <div id="_about" className="pt-20">
        <h1 className="font-semibold text-center">About</h1>
        <div className="flex flex-wrap pt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
          sapiente molestiae quo, iste optio quasi pariatur laborum sed maiores
          placeat accusamus consequuntur neque impedit facilis rem dicta
          corrupti illum itaque.
        </div>
      </div>

      <div id="services" className="pt-20">
        <h1 className="font-semibold text-center">My Services</h1>
        <div className="flex flex-wrap pt-10">
          {[1, 2, 3].map((item, key) => (
            <div key={key} className="w-2/6 p-2 service">
              <div className="service-box">
                <span className="after"></span>
                <span className="before"></span>
                <div className="service-content">
                  <h4>Web Design</h4>
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

      <div
        id="skills"
        className="flex flex-col justify-center items-center pt-20 skills-area">
        <h1 className="font-semibold text-center text-white">Skills</h1>
        <div className="flex flex-wrap pt-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
            <div key={key} className="w-1/2 p-2 pl-10 pr-10">
              <div className="skillbar" data-percent="95%">
                <h6 className="skillbar-title">HTML5</h6>
                <h6 className="skillbar-percent">95%</h6>

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
