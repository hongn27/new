import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import './index.css'
import Home from './views/Home.jsx'
import Service from './views/Service.jsx'
import News from './views/News.jsx'
import Contact from './views/Contact.jsx'
import NotFound from './views/NotFound.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      
        <Route path='App' element={<App />} />
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
