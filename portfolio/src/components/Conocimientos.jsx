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
import bootstrap from "../assets/icons8-oreja-96.png"
import firebase from "../assets/icons8-firebase-96.png"

const Conocimientos = () => {
    return (
    <>
    <div className={clases.divPadre}>
        <div className={clases.conocimientosDiv}>
            <a href="https://lenguajehtml.com/"><img className={clases.conocimientoLogos} src={html} alt="" /></a>
            <a href="https://lenguajecss.com/css/"><img className={clases.conocimientoLogos} src={css} alt="" /></a>
            <a href="https://sass-lang.com/"><img className={clases.conocimientoLogos} src={sass} alt="" /></a>
            <a href="https://lenguajejs.com/"><img className={clases.conocimientoLogos} src={javaScript} alt="" /></a>
            <a href="https://react.dev/"><img className={clases.conocimientoLogos} src={react} alt="" /></a>
            <a href="https://git-scm.com/"><img className={clases.conocimientoLogos} src={git} alt="" /></a>
            <a href="https://firebase.google.com/?hl=es"><img className={clases.conocimientoLogos} src={firebase} alt="" /></a>
        </div>
        <div className={clases.conocimientosDiv}>
            <a href="https://github.blog/"><img className={clases.conocimientoLogos} src={github} alt=""/></a>
            <a href="https://nodejs.org/en"><img className={clases.conocimientoLogos} src={node} alt="" /></a>
            <a href="https://www.figma.com/"><img className={clases.conocimientoLogos} src={figma} alt="" /></a>
            <a href="https://www.adobe.com/ar/products/photoshop.html"><img className={clases.conocimientoLogos} src={ph} alt="" /></a>
            <a href="https://www.adobe.com/ar/products/illustrator.html"><img className={clases.conocimientoLogos} src={ai} alt="" /></a>
            <a href="https://www.adobe.com/ar/products/premiere.html"><img className={clases.conocimientoLogos} src={pr} alt="" /></a>
            <a href="https://getbootstrap.com/"><img className={clases.conocimientoLogos} src={bootstrap} alt="" /></a>           
        </div>
    </div>      
    </>    
  
    )
}

export default Conocimientos