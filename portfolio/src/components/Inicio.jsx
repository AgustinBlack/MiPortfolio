import clases from "../styles/Inicio.module.css"
import foto from "../assets/foto-cv.jpeg"
import cv from "../assets/Curriculum-Vitae.pdf"

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
                    </h3>                  
                </div>                
            </div>
        </>
    )
}

export default Inicio 