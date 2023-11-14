import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import Service from'./views/Service'





function App() {
   return (
    <>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
