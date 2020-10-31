import * as React from 'react';

interface SignInProps {
  authClient: any;
}

export function SignIn({ authClient }: SignInProps) {
  const signIn = authClient.signIn;

  return (
    <>
      <h2>Please Sign In</h2>
      <button onClick={signIn}>SignIn</button>
    </>
  );
}
