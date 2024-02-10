import clases from "../styles/Proyectos.module.css"
import cafeteria from "../assets/cafeteria.png"
import miniCopito from "../assets/mini-copito.png"
import ecoCambios from "../assets/eco-cambios.png"
import futclothes from "../assets/futclothes.png"

const Proyectos = () => {
    return (
        <div className={clases.proyectoDivPadre}>
                <div className={clases.proyectoDiv}>
                    <h3 className={clases.proyectoNombre}>Eco Cambios</h3>
                    <a className={clases.proyectoLinks} href="https://ecocambios.netlify.app/">Hace click aca para visitar el sitio!</a>
                    <a href="https://ecocambios.netlify.app/"><img src={ecoCambios} alt="" className={clases.proyectoImg}/></a>
                </div>
                <div className={clases.proyectoDiv}>
                    <h3 className={clases.proyectoNombre}>Mini Copito</h3>
                    <a className={clases.proyectoLinks} href="https://minicopito.netlify.app/">Hace click aca para visitar el sitio!</a>
                    <a href="https://minicopito.netlify.app/"><img src={miniCopito} alt="" className={clases.proyectoImg}/></a>
                </div>                
                <div className={clases.proyectoDiv}>
                    <h3 className={clases.proyectoNombre}>Cafeteria</h3>
                    <a className={clases.proyectoLinks} href="https://modelocafe.netlify.app/">Hace click aca para visitar el sitio!</a>
                    <a href="https://modelocafe.netlify.app/"><img src={cafeteria} alt="" className={clases.proyectoImg}/></a>
                </div>
                <div className={clases.proyectoDiv}>
                    <h3 className={clases.proyectoNombre}>FutClothes</h3>
                    <a className={clases.proyectoLinks} href="https://fut-retro.vercel.app/">Hace click aca para visitar el sitio!</a>
                    <a href="https://fut-retro.vercel.app/"><img src={futclothes} alt="" className={clases.proyectoImg}/></a>
                </div>
            </div>
    )
}

export default Proyectos