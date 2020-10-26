import React, { createContext, useEffect, useState } from 'react';

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');
  const languageOptions = ['pt', 'en'];
  useEffect(() => {
    const UI_LANG = localStorage.getItem('UI_LANG');
    setLanguage(prevSate => UI_LANG || 'pt');
  }, []);

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
    <LanguageContext.Provider
      value={{ languageOptions, language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
