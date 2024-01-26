import clases from "../styles/Inicio.module.css"
import foto from "../assets/foto-cv.jpeg"
import cv from "../assets/Curriculum-Vitae.pdf"
import dW from "../assets/cert-html-css.png"
import jS from "../assets/cert-js.png"

const Inicio = () => {
    return (
        <>
            <div className={clases.inicioDiv}>
                <img className={clases.inicioImg} src={foto} alt=""/>
                <div>                    
                    <h3 className={clases.inicioTexto}>
                        Hola! Mi nombre es Guillermo Agustin Black y tengo 19 años.
                        <br/> 
                        Soy Desarrollador Web. Este es mi <a href={cv} className={clases.inicioCv}>Curriculum Vitae.</a>
                        <br />
                        Certificado de <a href={dW} className={clases.inicioCv}>Desarrollo Web</a>.
                        <br />
                        Certificado de <a href={jS} className={clases.inicioCv}>JavaScript</a>.
                    </h3>                 
                </div>  
            </div>              
        </>
    )
}

export default Inicio 