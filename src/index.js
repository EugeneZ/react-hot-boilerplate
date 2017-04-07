import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootEl = document.getElementById('root');
const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(App);

// This part is not needed if your app is idempotent (like this boilerplate is)
// Livereactload will re-run this file if the hook is not present
// Feel free to delete it and try it out
if (module.hot) module.hot.onUpdate(() => render(App));
