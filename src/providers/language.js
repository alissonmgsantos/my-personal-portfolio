import React, { createContext, useContext, useEffect, useState } from 'react';

export const LanguageContext = createContext({});

export const LanguageProvider = props => {
  const [language, setLanguage] = useState('portuguese');
  const languageOptions = ['portuguese', 'english'];

  useEffect(() => {
    const UI_LANG = localStorage.getItem('UI_LANG');
    setLanguage(prevSate => UI_LANG || 'portuguese');
  }, []);

  function handleLanguage(lang) {
    console.log('passou aqui', lang);
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
      value={{ languageOptions, language, handleLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
// import React, { createContext, useEffect, useState } from 'react';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState('portuguese');
//   const languageOptions = ['portuguese', 'english'];

//   useEffect(() => {
//     const UI_LANG = localStorage.getItem('UI_LANG');
//     setLanguage(prevSate => UI_LANG || 'portuguese');
//   }, []);

//   function handleLanguage(lang) {
//     switch (lang) {
//       case 'english':
//         localStorage.setItem('UI_LANG', lang);
//         setLanguage(prevState => 'english');
//         break;
//       default:
//         localStorage.setItem('UI_LANG', lang);
//         setLanguage(prevState => 'portuguese');
//         break;
//     }
//   }

//   return (
//     <LanguageContext.Provider
//       value={{ languageOptions, language, handleLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => React.useContext(LanguageContext);
