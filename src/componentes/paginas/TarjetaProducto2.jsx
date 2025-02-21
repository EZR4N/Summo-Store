import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom"
import "./TarjetaProducto2.scss"
import { CarritoContext } from '../../context/CarritoContext'
const TarjetaProducto2 = ({producto}) => {
    const [contadorTarjeta, setContadorTarjeta] = useState(0)
          
          const {agregarAlCarrito} = useContext(CarritoContext)

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
    <>
     <div className="listadoProductosTarjetaContainer">
        
            <div className="listadoProductosTarjetaFavContainer">
            
                <img src="\src\assets\imagenes\fav.png" alt="icono favorito" />
            
            </div>
            
            <div className='listadoProductosTarjetaImgContainer'>
            <Link to={`/item/${producto.id}`}>
              <img className='listadoProductosTarjeteaImg' src={producto.img} alt={"imagen "+ producto.nombre} />
              </Link>
              </div>

              <div className="listadoProductosTarjetaInfo">
              <Link to={`/item/${producto.id}`}>
              <h4>{producto.nombre}</h4>
              </Link>
              <Link to={`/item/${producto.id}`}>
              <h3>{producto.marca}</h3>
              </Link>
              <Link to={`/item/${producto.id}`}>
              <h3>{"$"+producto.precio+" /uni"}</h3>
              </Link>
              </div>
            <div className="listadoProductosTarjetaSumarRestar">
                <img onClick={decrementar} src="\src\assets\imagenes\remove.png" alt="icono restar unidad" />
                    <h3> {contadorTarjeta}</h3>
                <img onClick={incrementar} src="\src\assets\imagenes\add.png" alt="icono agregar unidad" />
            </div>
            <img onClick={(e) => agregar(producto, contadorTarjeta)} className='listadoProductosTarjetaAgregarAlCarrito' src="\src\assets\imagenes\agregar (2).png" alt="icono agregar carrito" />


     </div>
    </>
  )
}

export default TarjetaProducto2