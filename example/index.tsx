import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Authenticator, useAuth } from '../.';

const App = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>My App</h2>
      <button onClick={logout}>Sign Out</button>
    </div>
  );
};

ReactDOM.render(
  <Authenticator>
    <App />
  </Authenticator>,
  document.getElementById('root')
);
