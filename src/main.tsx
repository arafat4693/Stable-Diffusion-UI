import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import Gallery from './components/gallery.tsx';
import Prompt from '@/components/prompt.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App>
        <Prompt />
      </App>
    ),
  },
  {
    path: '/gallery',
    element: (
      <App>
        <Gallery />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
