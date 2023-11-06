import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './views/Home'




function App() {
   return (
    <>
      <div className='wrapper'></div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
