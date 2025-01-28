import React, { useState } from 'react'
import "./TarjetaProducto.scss"
import { Link } from 'react-router-dom'
const TarjetaProducto = ({idProducto, imagenProducto, producto, descripcion, marca, precio, stock, descuento, lanzamiento}) => {
  
    const [contadorTarjeta, setContadorTarjeta] = useState(0)

      const incrementar = () =>{
        contadorTarjeta < stock && setContadorTarjeta(contadorTarjeta+1) 
      }

      const decrementar = () =>{
        contadorTarjeta != 0 && setContadorTarjeta(contadorTarjeta-1)
      }
  return (
    
            <div className="mainContainerCarta">
              <div className="mainContainerCartaFav">
                <img src="\src\assets\imagenes\fav.png" alt="icono favorito" />
              </div>
              <Link to={`/item/${idProducto}`}>
              <img className='mainContainerCartaImagen' src={imagenProducto} alt={"imagen "+ producto} />
              </Link>
              <Link to={`/item/${idProducto}`}>
              <h4>{producto}</h4>
              <h3>{marca}</h3>
              <h3>{"$"+precio+" /uni"}</h3>
              </Link>
            <div className="mainContainerCartaSumarRestar">
                <img onClick={decrementar} src="\src\assets\imagenes\remove.png" alt="icono restar unidad" />
                    <h3> {contadorTarjeta}</h3>
                <img onClick={incrementar} src="\src\assets\imagenes\add.png" alt="icono agregar unidad" />
            </div>
            <img className='mainContainerCartaAgregarAlCarrito' src="\src\assets\imagenes\agregar (2).png" alt="icono agregar carrito" />
            </div>
          
    
  )
}

export default TarjetaProducto