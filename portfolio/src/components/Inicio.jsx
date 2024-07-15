import clases from "../styles/Inicio.module.css"
import foto from "../assets/foto-cv.jpeg"
import cv from "../assets/Curriculum-Vitae.pdf"
import dW from "../assets/cert-html-css.png"
import jS from "../assets/cert-js.png"
import react from '../assets/react.png'

const Inicio = () => {
    return (
        <>
            <div className={clases.inicioDiv}>
                <img className={clases.inicioImg} src={foto} alt=""/>
                <div>                    
                    <h3 className={clases.inicioTexto}>
                        Hola! Mi nombre es Guillermo Agustin Black y tengo 20 años.
                        <br/> 
                        Soy Desarrollador Web. Este es mi <a href={cv} className={clases.inicioCv}>Curriculum Vitae.</a>
                        <br />
                        Certificado de <a href={dW} className={clases.inicioCv}>Desarrollo Web</a>.
                        <br />
                        Certificado de <a href={jS} className={clases.inicioCv}>JavaScript</a>.
                        <br />
                        Certificado de <a href={react} className={clases.inicioCv}>React JS</a>.
                    </h3>                 
                </div>  
            </div>              
        </>
    )
}

export default Inicio 