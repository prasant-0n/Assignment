import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import { NextUIProvider } from "@nextui-org/react";
import App from './App.tsx';
import {Store} from './utils/Store.ts'; // Import your Redux store
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap your application with the Provider component */}
    <Provider store={Store}>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
