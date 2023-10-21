import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GlobalContextProvdier} from './context/GlobalContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContextProvdier>
  <React.StrictMode>

    <App />
   
  </React.StrictMode>
  </GlobalContextProvdier>
);
