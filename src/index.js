import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import "normalize.css"
import '@/assets/css/index.less'

import App from './App';
import theme from '@/assets/theme/index.js';
import { store } from '@/store/index.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </Suspense>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals