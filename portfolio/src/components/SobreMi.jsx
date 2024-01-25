import clases from "../styles/SobreMi.module.css"

const SobreMi = () => {
    return (
        <div className={clases.sobreMiDiv}>
            <h2 className={clases.sobreMiTitulo}>Experiencia Laboral</h2>
            <div className={clases.expDiv}>
                <div className={clases.expInfo}>
                    <h3 className={clases.expNombre}>Ojo Blindado</h3>   
                    <p>Mayo 2023 - Actualidad</p> 
                </div>
                <p className={clases.expTexto}>Es una empresa que se encarga de la personalización y administración de canales de Youtube, en su mayoría de música. Mi labor en la  empresa es darle el mismo estilo a todas las descripciones de los videos, edición y publicación de los mismos.</p>
            </div>
            <div className={clases.expDiv}>
                <div className={clases.expInfo}>
                    <h3 className={clases.expNombre}>Mini Copito</h3>   
                    <p>Septiembre 2023 - Noviembre 2023</p> 
                </div>
                <p className={clases.expTexto}>Mini Copito es una emprendimiento sobre indumentaria. Mi tarea fue desarrollar una página web en la que simplemente se vea el catálogo de productos y su información. El trabajo fue realizado de manera independiente, es decir, "Freelance".</p>
            </div>
        </div>
    )
}

export default SobreMi