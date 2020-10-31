import * as React from 'react';
import { AuthProvider } from '../context/auth-context';

interface AuthenticatorProps {
  children: React.ReactNode;
  authClient?: any;
}

class defaultAuthClient {
  login = () => {};
  logout = () => {};
  signin = () => {};
}

export function Authenticator({ children, authClient }: AuthenticatorProps) {
  return (
    <AuthProvider authClient={authClient || defaultAuthClient}>
      {children}
    </AuthProvider>
  );
}
