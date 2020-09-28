import React, { createContext, useContext, useState } from 'react';
import UserContext from './user';

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const user = useContext(UserContext);
  const [language, setLanguage] = useState(prevSate => 'pt');

  function handleLanguage(lang) {
    switch (lang) {
      case 'en':
        console.log(user);
        setLanguage(prevState => 'en');
        break;
      default:
        setLanguage(prevState => 'pt');
        break;
    }
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
