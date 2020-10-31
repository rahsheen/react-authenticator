import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';

const App = () => {
  return (
    <ReactAuthenticator>
      <ReactSignIn
        headerText="My Custom Sign In Text"
        slot="sign-in"
      ></ReactSignIn>
    </ReactAuthenticator>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
