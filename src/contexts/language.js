import React, { createContext, useContext, useEffect, useState } from 'react';
import UserContext from './user';

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const { languageSwitch } = useContext(UserContext);
  const UI_LANG = localStorage.getItem('UI_LANG');
  const [language, setLanguage] = useState(prevSate => UI_LANG || 'pt');
  useEffect(() => {
    languageSwitch(language);
  }, [language]);
  function handleLanguage(lang) {
    switch (lang) {
      case 'en':
        localStorage.setItem('UI_LANG', lang);
        setLanguage(prevState => 'en');
        break;
      default:
        localStorage.setItem('UI_LANG', lang);
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
