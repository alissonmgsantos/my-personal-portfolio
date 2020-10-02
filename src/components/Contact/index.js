import React, { useContext } from 'react';
import LanguageContext from '../../contexts/language';
import UserContext from '../../contexts/user';
import locale from '../../locale';
import Footer from '../Footer';

const Contact = () => {
  const { user } = useContext(UserContext);
  const { language } = useContext(LanguageContext);

  const findImage = image => {
    return require(`../../images/social/${image}.svg`);
  };

  return (
    <section id="contact" className="h-64 ">
      {/* <h1 className="font-semibold text-center text-black">
        {locale[language].contact}
      </h1> */}
      {/*<div className="flex justify-center p-10">
         {user.contact.map((item, key) => (
          <img
            title={item.name}
            key={key}
            src={findImage(item.name)}
            alt={`${item.name} contact`}
            width="24"
            height="24"
          />
        ))}
      </div> */}
      <Footer />
    </section>
  );
};

export default Contact;
