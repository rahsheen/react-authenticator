import * as React from 'react';

interface SignInProps {
  login: (object: { username: string; password: string }) => void;
}

export function SignIn({ login }: SignInProps) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    login({ username, password });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Please Sign In</h2>
        <input
          type="text"
          onChange={e => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button disabled={!username.length && !password.length} type="submit">SignIn</button>
      </form>
    </>
  );
}
