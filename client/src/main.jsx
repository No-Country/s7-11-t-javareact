import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <BrowserRouter>
     <Routes>
         <Route path="/" element={ <App /> }>
         </Route>
       </Routes>
     </BrowserRouter>
  </React.StrictMode>,
);

