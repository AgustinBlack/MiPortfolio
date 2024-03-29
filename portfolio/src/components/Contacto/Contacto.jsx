import mail from "../../assets/icons8-gmail-50.png"
import telefono from "../../assets/icons8-llamada-50.png"
import github from "../../assets/icons8-github-48.png"
import linkedin from "../../assets/icons8-linkedin-50.png"
import clases from "../../styles/Contacto.module.css"

const Contacto = () => {
    return (
        <div className={clases.contactoDiv}>
                <div className={clases.contactoOpciones}>
                    <a href=""><img src={mail} alt="Gmail"/></a>
                    <p className={clases.contactoTexto}>agustinBlack08@gmail.com</p> 
                </div>
                <div className={clases.contactoOpciones}>
                    <a href=""><img src={telefono} alt="Telefono"/></a>
                    <p className={clases.contactoTexto}>11-4475-8749</p>
                </div>                
                <div className={clases.contactoOpciones}>
                    <a href="https://github.com/AgustinBlack"><img src={github} alt="GitHub"/></a>
                    <p className={clases.contactoTexto}>AgustinBlack</p>
                </div>
                <div className={clases.contactoOpciones}>
                    <a href="https://www.linkedin.com/in/agustin-black-134083245/"><img src={linkedin} alt="Linkedin"/></a>
                    <p className={clases.contactoTexto}>Agustin Black</p>
                </div>
        </div>
    )
}

export default Contacto