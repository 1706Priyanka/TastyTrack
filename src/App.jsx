import './App.css'
import MainLayout from './components/MainLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResturantLayout from './components/ResturantLayout'

function App() {
  
  return (
    <>
    <Router>
    <Routes>
    <Route path="/" element={<MainLayout />} />
    <Route path='/resturant/:id' element={<ResturantLayout/>} />
    </Routes>
    </Router>
    
    </>
  )
}

export default App
