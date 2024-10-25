
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Footer from './components/Footer'
import Cursos from './pages/Cursos'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App