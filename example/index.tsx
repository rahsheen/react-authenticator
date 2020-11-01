import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Authenticator } from '../.';

const App = () => {
  return <h2>My App</h2>;
};

ReactDOM.render(
  <Authenticator>
    <App />
  </Authenticator>,
  document.getElementById('root')
);
