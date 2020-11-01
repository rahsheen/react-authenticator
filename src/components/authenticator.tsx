import * as React from 'react';
import { AuthProvider } from '../context/auth-context';

interface AuthenticatorProps {
  children: React.ReactNode;
  authClient?: any;
}

const defaultAuthClient = {
  login: (data: any) => Promise.resolve(data?.username),
  logout: () => {},
  register: () => {},
}

export function Authenticator({ children, authClient }: AuthenticatorProps) {
  
  return (
    <AuthProvider authClient={authClient || defaultAuthClient}>
      {children}
    </AuthProvider>
  );
}
