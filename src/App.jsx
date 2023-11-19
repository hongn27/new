import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './views/Home'
import Service from'./views/Service'
import Contact from './views/Contact'





function App() {
   return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
