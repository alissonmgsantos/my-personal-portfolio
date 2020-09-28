import React, { createContext, useContext, useEffect, useState } from 'react';
import { useQueryUser } from '../hooks';
import LanguageContext from './language';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  let data = useQueryUser();
  const [user, setUser] = useState(prevSate =>
    Object.assign(
      { name: data.name },
      { pt: JSON.parse(data.pt.code) },
      { en: JSON.parse(data.en.code) }
    )
  );

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
