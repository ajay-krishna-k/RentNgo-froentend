import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './m.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <BrowserRouter>
      <App />
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
</BrowserRouter>   </React.StrictMode>
);
