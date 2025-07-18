import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// O React.StrictMode é um wrapper que ajuda a identificar potenciais problemas na aplicação.
// É uma boa prática mantê-lo durante o desenvolvimento.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);