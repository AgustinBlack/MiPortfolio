import clases from "../styles/Footer.module.css"
import logo from "../assets/Logo-AB.jpg"
import Contacto from "./Contacto/Contacto"

const Footer = () =>{
    return(
        <div className={clases.divPadre}>
            <img src={logo} alt="" className={clases.logo}/>
            <Contacto/>
        </div>
    )
}

export default Footer