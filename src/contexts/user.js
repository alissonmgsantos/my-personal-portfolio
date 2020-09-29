import React, { createContext, useEffect, useState } from 'react';
import { useQueryUser } from '../hooks';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  let data = useQueryUser();
  const [UI_LANG, setUI_LANG] = useState(null);
  const [user, setUser] = useState(
    Object.assign({ name: data.name }, JSON.parse(data[UI_LANG || 'pt'].code))
  );

  useEffect(() => {
    setUI_LANG(prevSate => localStorage.getItem('UI_LANG'));
  }, []);

  function languageSwitch(language) {
    setUser(prevSate =>
      Object.assign({ name: data.name }, JSON.parse(data[language].code))
    );
  }

  return (
    <UserContext.Provider value={{ user, languageSwitch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
