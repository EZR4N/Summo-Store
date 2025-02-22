import React, { useContext, useState } from 'react'
import "./TarjetaProducto.scss"
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../../context/CarritoContext'
const TarjetaProducto = ({producto}) => {
  
    const { agregarAlCarrito } = useContext(CarritoContext)

    const [contadorTarjeta, setContadorTarjeta] = useState(0)

      const incrementar = () =>{
        contadorTarjeta < producto.stock && setContadorTarjeta(contadorTarjeta+1) 
      }

      const decrementar = () =>{
        contadorTarjeta != 0 && setContadorTarjeta(contadorTarjeta-1)
      }

      const agregar= (producto, cantidad) =>{
        agregarAlCarrito(producto, cantidad)
        setContadorTarjeta(0)
      }
  return (
    
            <div className="mainContainerCarta">
              <div className="mainContainerCartaFav">
                <img src="/assets/imagenes/fav.png" alt="icono favorito" />
              </div>
              <Link to={`/item/${producto.id}`}>
              <img className='mainContainerCartaImagen' src={producto.img} alt={"imagen "+ producto.nombre} />
              </Link>
              <Link to={`/item/${producto.id}`}>
              <h4>{producto.nombre}</h4>
              <h3>{producto.marca}</h3>
              <h3>{"$"+producto.precio+" /uni"}</h3>
              </Link>
            <div className="mainContainerCartaSumarRestar">
                <img onClick={decrementar} src="/assets/imagenes/remove.png" alt="icono restar unidad" />
                    <h3> {contadorTarjeta}</h3>
                <img onClick={incrementar} src="/assets/imagenes/add.png" alt="icono agregar unidad" />
            </div>
            <img onClick={()=> agregar(producto,contadorTarjeta)} className='mainContainerCartaAgregarAlCarrito' src="/assets/imagenes/agregar (2).png" alt="icono agregar carrito" />
            </div>
          
    
  )
}

export default TarjetaProducto
