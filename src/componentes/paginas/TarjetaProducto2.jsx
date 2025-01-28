import React from 'react'
import { useState } from 'react'

import {Link, useLocation} from "react-router-dom"
import "./TarjetaProducto2.scss"
const TarjetaProducto2 = ({idProducto, imagenProducto, producto, descripcion, marca, precio, stock, descuento, lanzamiento}) => {
    const [contadorTarjeta, setContadorTarjeta] = useState(0)


          const incrementar = () =>{
            contadorTarjeta < stock && setContadorTarjeta(contadorTarjeta+1) 
          }
    
          const decrementar = () =>{
            contadorTarjeta != 0 && setContadorTarjeta(contadorTarjeta-1)
          }
  return (
    <>
     <div className="listadoProductosTarjetaContainer">
        
            <div className="listadoProductosTarjetaFavContainer">
            
                <img src="\src\assets\imagenes\fav.png" alt="icono favorito" />
            
            </div>
            
            <div className='listadoProductosTarjetaImgContainer'>
            <Link to={`/item/${idProducto}`}>
              <img className='listadoProductosTarjeteaImg' src={imagenProducto} alt={"imagen "+ producto} />
              </Link>
              </div>

              <div className="listadoProductosTarjetaInfo">
              <Link to={`/item/${idProducto}`}>
              <h4>{producto}</h4>
              </Link>
              <Link to={`/item/${idProducto}`}>
              <h3>{marca}</h3>
              </Link>
              <Link to={`/item/${idProducto}`}>
              <h3>{"$"+precio+" /uni"}</h3>
              </Link>
              </div>
            <div className="listadoProductosTarjetaSumarRestar">
                <img onClick={decrementar} src="\src\assets\imagenes\remove.png" alt="icono restar unidad" />
                    <h3> {contadorTarjeta}</h3>
                    {/* <h3>{cantidad}</h3> */}
                <img onClick={incrementar} src="\src\assets\imagenes\add.png" alt="icono agregar unidad" />
            </div>
            <img className='listadoProductosTarjetaAgregarAlCarrito' src="\src\assets\imagenes\agregar (2).png" alt="icono agregar carrito" />


     </div>
    </>
  )
}

export default TarjetaProducto2