import React, { useContext, useState } from 'react'
import "./TarjetaProducto.scss"
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../../context/CarritoContext'
import TarjetaProductoDescuento from './TarjetaProductoDescuento'
import TarjetaProductoAgregado from './TarjetaProductoAgregado'
const TarjetaProducto = ({producto}) => {
  
    const { agregarAlCarrito } = useContext(CarritoContext)
    const [ agregado, setAgregado ] = useState(false)
    const [ contadorTarjeta, setContadorTarjeta ] = useState(0)
    
      const incrementar = () =>{
        contadorTarjeta < producto.stock && setContadorTarjeta((prev) => prev+1) 
      }

      const decrementar = () =>{
        contadorTarjeta != 0 && setContadorTarjeta((prev) => prev-1)
      }

      const agregar= (producto, cantidad) =>{
        agregarAlCarrito(producto, cantidad)
        setContadorTarjeta(0)
        setAgregado(true)
      }
  return (
    
            <div className="mainContainerCarta">
              <Link to={`/item/${producto.id}`}>
              <img className='mainContainerCartaImagen' src={producto.img} alt={"imagen "+ producto.nombre} />
              </Link>
              <Link to={`/item/${producto.id}`}>
              <h4>{producto.nombre}</h4>
              <h3>{producto.marca}</h3>
              {
                producto.descuento > 0 && <h4 className='mainContainerCartaPrecioSinDescuento'>{producto.precioSinDescuento}</h4>
              }

              {
              producto.descuento > 0 && <TarjetaProductoDescuento producto={producto}/>
              }
              <h3 className='mainContainerCartaPrecio'>{"$"+producto.precio}</h3>
              </Link>
              {
                agregado?(
                  <>
                  <TarjetaProductoAgregado/>
                  </>
                 ):(
                  <>
                  <div className="mainContainerCartaSumarRestar">
                      <img onClick={decrementar} src="/assets/imagenes/remove.png" alt="icono restar unidad" />
                          <h3> {contadorTarjeta}</h3>
                      <img onClick={incrementar} src="/assets/imagenes/add.png" alt="icono agregar unidad" />
                  </div>
                  <img onClick={()=> agregar(producto,contadorTarjeta)} className='mainContainerCartaAgregarAlCarrito' src="/assets/imagenes/agregar (2).png" alt="icono agregar carrito" />                  
                  </>
                    )
              }
            </div>
          
    
  )
}

export default TarjetaProducto
