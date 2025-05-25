import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutIr from './pages/AboutIr'
import AboutDr from './pages/AboutDr'
import Treatment from './pages/Treatment'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
   <>
   <Navbar />
   <Routes>
     <Route path='/' element={<Home />} />
    <Route path='contact-us' element={<Contact
     />} />
    <Route path='/about-ir' element={<AboutIr />} />
    <Route path='/about-doctor' element={<AboutDr />} />
    <Route path='/treatment-facilities' element={<Treatment />} />
   </Routes>
   <Footer />
   </>
  )
}

export default App
