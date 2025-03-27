import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom"
import "./TarjetaProducto2.scss"
import { CarritoContext } from '../../context/CarritoContext'
import TarjetaProducto2Descuento from './TarjetaProducto2Descuento'
import TarjetaProducto2Agregado from './TarjetaProducto2Agregado'
const TarjetaProducto2 = ({producto}) => {
    const [cantidad, setCantidad] = useState(0)
    const [agregado, setAgregado] = useState(false)
          const {agregarAlCarrito} = useContext(CarritoContext)

          const incrementar = () =>{
            cantidad < producto.stock && setCantidad(cantidad+1) 
          }
    
          const decrementar = () =>{
            cantidad != 0 && setCantidad(cantidad-1)
          }

          const agregar= (producto, cantidad) =>{
            agregarAlCarrito(producto, cantidad)
            setAgregado(true)
            setCantidad(0)
          }
  return (
    <>
     <div className="listadoProductosTarjetaContainer">
            
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
              
              {
                producto.descuento > 0 && <h4 className='tarjeta2PrecioSinDescuento'>{producto.precioSinDescuento}</h4>
              }

              {
                producto.descuento > 0 && <TarjetaProducto2Descuento producto={producto}/>
              }
              <h3>{"$"+producto.precio+" /uni"}</h3>
              </Link>
              </div>
              {
                agregado?(
                  <>
                    <TarjetaProducto2Agregado/>
                  </>
                ):(
                  <>
                  <div className="listadoProductosTarjetaSumarRestar">
                      <img onClick={decrementar} src="/assets/imagenes/remove.png" alt="icono restar unidad" />
                          <h3> {cantidad}</h3>
                      <img onClick={incrementar} src="/assets/imagenes/add.png" alt="icono agregar unidad" />
                  </div>
                  <img onClick={(e) => agregar(producto, cantidad)} className='listadoProductosTarjetaAgregarAlCarrito' src="/assets/imagenes/agregar (2).png" alt="icono agregar carrito" />                  
                  </>
                )
              }


     </div>
    </>
  )
}

export default TarjetaProducto2
