import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQueryUser } from '../hooks';
import LanguageContext from './language';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  let data = useQueryUser();
  const [user, setUser] = useState(
    Object.assign({ name: data.name }, JSON.parse(data.pt.code))
  );

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
