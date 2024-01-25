import clases from "../styles/Nav.module.css"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className={clases.navDiv}>
            <div className={clases.navLinks}>
                <Link to={"/"} className={clases.navLink}>Inicios<span></span><span></span></Link>
                <Link to={"/Proyectos"} className={clases.navLink}>Proyectos<span></span><span></span></Link>
                <Link to={"/SobreMi"} className={clases.navLink}>Sobre Mi<span></span><span></span></Link>
                <Link to={"/Conocimientos"} className={clases.navLink}>Conocimientoss<span></span><span></span></Link>                
            </div>

        </div>
    )
}

export default NavBar