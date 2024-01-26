import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import clases from "./styles/App.module.css"
import NavBar from "./components/NavBar"
import Inicio from './components/Inicio'
import Proyectos from './components/Proyectos'
import Conocimientos from './components/Conocimientos'
import SobreMi from './components/SobreMi'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className={clases.appDiv}>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path={"/"} element={<Inicio/> } />
          <Route path={"/Proyectos"} element={<Proyectos/> }/>
          <Route path={"/SobreMi"} element={<SobreMi/> }/>
          <Route path={"/Conocimientos"} element={<Conocimientos/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>    
    </>

  )
}

export default App
