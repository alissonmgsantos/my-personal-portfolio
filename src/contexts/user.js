import React, { createContext, useState } from 'react';
import { useQueryUser } from '../hooks';

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const data = useQueryUser();
  const [user] = useState(data);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
