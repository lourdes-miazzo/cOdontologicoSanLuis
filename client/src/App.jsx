import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home.jsx"
import Nosotros from "./pages/nosotros/Nosotros.jsx"
import Proveeduria from './pages/proveeduria/Proveeduria.jsx';
import Comision from './pages/comision/Comision.jsx';
import Error404 from "./pages/error/Error404.jsx"

import { AuthProvider } from './context/AuthContext.jsx';
import Capacitaciones from './pages/capacitacion/Capacitaciones.jsx';
import Posgrado from './pages/posgrado/Posgrado.jsx';
import Soofma from './pages/soofma/Soofma.jsx';
import Cursos from './pages/cursos/Cursos.jsx';
import Autogestion from './pages/autogestion/Autogestion.jsx';
import NavBar from './components/navBar/NavBar.jsx';







function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/> 
            <Route exact path="/api/nosotros" element={<Nosotros/>}/>
            <Route exact path="/api/proveeduria" element={<Proveeduria/>}/>
            <Route exact path="/api/comision" element={<Comision/>}/>
            <Route exact path="/api/capacitaciones" element={<Capacitaciones/>}/>
            <Route exact path="/api/capacitaciones/posgrado" element={<Posgrado/>}/>
            <Route exact path="/api/capacitaciones/soofma" element={<Soofma/>}/>
            <Route exact path="/api/capacitaciones/cursos" element={<Cursos/>}/>
            <Route exact path="/api/autogestion" element={<Autogestion/>}/>
            <Route path='/*' element={<Error404/>}/>
        </Routes>
      </BrowserRouter> 
    </AuthProvider> 
    </>
  )
}

export default App
