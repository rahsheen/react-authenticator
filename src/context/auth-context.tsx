import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { SignIn } from '../components/sign-in';

const localStorageKey = '__react_authenticator_token__';

interface AuthContextType {
  user?: object;
  login?: (data: any) => void;
  logout?: () => void;
  register?: () => void;
}

const AuthContext = createContext<AuthContextType>({});

interface AuthProviderProps {
  children: ReactNode;
  authClient: any;
}

const AuthProvider = ({ children, authClient }: AuthProviderProps) => {
  const [user, setUser] = useState<any>();

  const login = (data: any) => authClient.login(data).then(setUser);
  const logout = () => authClient.logout();
  const register = () => authClient.register(setUser);

  // code for pre-loading the user's information if we have their token in
  // localStorage goes here
  useEffect(() => {
    const data = window.localStorage.getItem(localStorageKey);

    if (!data) {
      setUser(null);
    } else {
      setUser(data);
    }
  }, []);

  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.

  // We haven't initially tried to login yet...
  if (user === undefined) {
    return <h2>Loading...</h2>;
  }

  // Initial Auth Failed. Register Login.
  if (user === null) {
    return <SignIn login={login} />;
  }

  // Note: I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  const authContextValue = { user, login, logout, register };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};

export { AuthProvider, useAuth };
