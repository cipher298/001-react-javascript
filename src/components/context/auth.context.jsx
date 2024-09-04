/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    name: '',
    email: '',
  },
});

export const AuthWrapper = (props) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: {
      name: '',
      email: '',
    },
  });

  const [appLoading, setAppLoading] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        appLoading,
        setAppLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
