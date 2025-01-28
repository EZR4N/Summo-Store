import React from 'react'
import "./Tarjeta.scss"
import {Link} from 'react-router-dom'

const Tarjeta = ({img, children, clase, ruta}) => {
    return (
        
    <div className="mainNuestrosProductosTarjetaCategoriaContainer">
        <Link to={ruta}>
            <img className={clase} src={img} alt={"logo de categoria"} />
            </Link>
            <Link to={ruta}>
            {children}
            </Link>
    </div>
    
    )
}

export default Tarjeta