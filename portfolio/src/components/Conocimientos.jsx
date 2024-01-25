import clases from "../styles/Conocimientos.module.css"
import html from "../assets/icons8-html-5-96.png"
import css from "../assets/icons8-css3-96.png"
import sass from "../assets/icons8-hablar-con-descaro-a-96.png"
import javaScript from "../assets/icons8-javascript-96.png"
import react from "../assets/icons8-reaccionar-nativo-96.png"
import git from "../assets/icons8-git-96.png"
import github from "../assets/icons8-github-96.png"
import node from "../assets/icons8-nodo-js-96.png"
import figma from "../assets/icons8-figura-96.png"
import ph from "../assets/icons8-adobe-photoshop-96.png"
import ai from "../assets/icons8-adobe-illustrator-96.png"
import pr from "../assets/icons8-adobe-premiere-pro-96.png"

const Conocimientos = () => {
    return (
    <div className={clases.divPadre}>
        <div className={clases.conocimientosDiv}>
            <img className={clases.conocimientoLogos} src={html} alt="" />
            <img className={clases.conocimientoLogos} src={css} alt="" />
            <img className={clases.conocimientoLogos} src={sass} alt="" />
            <img className={clases.conocimientoLogos} src={javaScript} alt="" />
            <img className={clases.conocimientoLogos} src={react} alt="" />
            <img className={clases.conocimientoLogos} src={git} alt="" />
        </div>
        <div className={clases.conocimientosDiv}>
            <img className={clases.conocimientoLogos} src={github} alt=""/>
            <img className={clases.conocimientoLogos} src={node} alt="" />
            <img className={clases.conocimientoLogos} src={figma} alt="" />
            <img className={clases.conocimientoLogos} src={ph} alt="" />
            <img className={clases.conocimientoLogos} src={ai} alt="" />
            <img className={clases.conocimientoLogos} src={pr} alt="" />            
        </div>
    </div>    
    )
}

export default Conocimientos