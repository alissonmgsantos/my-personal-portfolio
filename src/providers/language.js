import React, { createContext, useContext, useEffect, useState } from 'react';

export const LanguageContext = createContext({});

export const LanguageProvider = props => {
  const [language, setLanguage] = useState('portuguese');
  const languageOptions = ['portuguese', 'english'];

  useEffect(() => {
    const UI_LANG = localStorage.getItem('UI_LANG');
    setLanguage(prevSate => UI_LANG || 'portuguese');
  }, []);

  function toggleLanguage(lang) {
    switch (lang) {
      case 'english':
        localStorage.setItem('UI_LANG', lang);
        setLanguage(prevState => 'english');
        break;
      default:
        localStorage.setItem('UI_LANG', lang);
        setLanguage(prevState => 'portuguese');
        break;
    }
  }

  return (
    <LanguageContext.Provider
      value={{ languageOptions, language, toggleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
