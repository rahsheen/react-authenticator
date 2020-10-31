import React, { createContext, useEffect, useState } from "react";

interface AuthContextType {
  user?: object;
  login?: (data: object) => {};
  logout?: () => {};
  register?: () => {};
}

const AuthContext = createContext<AuthContextType>({});

const AuthProvider = (props: any) => {
  const [user, setUser] = useState();

  // code for pre-loading the user's information if we have their token in
  // localStorage goes here
  useEffect(() => {
    // Nada
  }, []);

  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.

  // We haven't tried to login yet
  if (user === undefined) {
    return (
      <p>Loading...</p>
    );
  }

  const login = () => {};
  const register = () => {};
  const logout = () => {};

  // Note: I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  const authContextValue = { user, login, register, logout };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
