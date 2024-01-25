import clases from "../styles/Proyectos.module.css"
import cafeteria from "../assets/cafeteria.png"
import miniCopito from "../assets/mini-copito.png"
import ecoCambios from "../assets/eco-cambios.png"

const Proyectos = () => {
    return (
        <div className={clases.proyectoDivPadre}>
                <div className={clases.proyectoDiv}>
                    <h3 className={clases.proyectoNombre}>Eco Cambios</h3>
                    <a className={clases.proyectoLinks} href="https://ecocambios.netlify.app/">Hace click aca para visitar el sitio!</a>
                    <img src={ecoCambios} alt="" className={clases.proyectoImg}/>
                </div>
                <div className={clases.proyectoDiv}>
                    <h3 className={clases.proyectoNombre}>Mini Copito</h3>
                    <a className={clases.proyectoLinks} href="https://minicopito.netlify.app/">Hace click aca para visitar el sitio!</a>
                    <img src={miniCopito} alt="" className={clases.proyectoImg}/>
                </div>                
                <div className={clases.proyectoDiv}>
                    <h3 className={clases.proyectoNombre}>Cafeteria</h3>
                    <a className={clases.proyectoLinks} href="https://modelocafe.netlify.app/">Hace click aca para visitar el sitio!</a>
                    <img src={cafeteria} alt="" className={clases.proyectoImg}/>
                </div>
                {/* <div className={clases.proyectoDiv}>
                    <h3 className={clases.proyectoNombre}>FutClothes</h3>
                    <a className={clases.proyectoLinks} href="">Hace click aca para visitar el sitio!</a>
                    <img src="#" alt="" className={clases.proyectoImg}/>
                </div>                 */}
            </div>
    )
}

export default Proyectos