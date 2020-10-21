import React from 'react';

const Footer = () => {
  const findImage = image => {
    return require(`../../images/social/${image}.svg`);
  };
  return (
    <section
      id="footer"
      className="h-40 flex flex-col justify-center items-center">
      <footer className="flex flex-col justify-center items-center">
        <div className="flex justify-center">
          {/* {user.contact.map((item, key) => (
            <a
              href={item.description}
              target="_blank"
              key={key}
              rel="noreferrer">
              <img
                title={item.name}
                src={findImage(item.name)}
                alt={`${item.name} contact`}
                width="32"
                height="32"
              />
            </a>
          ))} */}
        </div>
        {/* <p className="font-black uppercase tracking-wider">{`${
          user.name.split(' ')[0]
        } ${user.name.split(' ')[user.name.split(' ').length - 1]}`}</p> */}
        <small className="italic">
          {`Copyright © ${new Date().getFullYear()}`} All rights reserved. ®
        </small>
      </footer>
    </section>
  );
};

export default Footer;
