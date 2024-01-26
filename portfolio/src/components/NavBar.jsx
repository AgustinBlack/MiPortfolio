import clases from "../styles/Nav.module.css"
import { Link } from "react-router-dom"
import Contacto from "./Contacto/Contacto"
import logo from "../assets/Logo-AB.jpg"

const NavBar = () => {
    return (
        <>
        <div className={clases.navDiv}>
            <img className={clases.logo} src={logo} alt="" />
            <div className={clases.navLinks}>
                <Link to={"/"} className={clases.navLink}>Inicio<span></span><span></span></Link>
                <Link to={"/Proyectos"} className={clases.navLink}>Proyectos<span></span><span></span></Link>
                <Link to={"/SobreMi"} className={clases.navLink}>Sobre Mi<span></span><span></span></Link>
                <Link to={"/Conocimientos"} className={clases.navLink}>Conocimientos<span></span><span></span></Link>                
            </div>
            <Contacto/>
        </div>
        </>

    )
}

export default NavBar