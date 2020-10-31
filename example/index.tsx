import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Authenticator } from '../.';

const App = () => {
  return (
    <Authenticator>
      <h2>My App</h2>
    </Authenticator>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
