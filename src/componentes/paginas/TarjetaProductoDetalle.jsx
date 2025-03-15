import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainContainerProductosOfertas from '../main/MainContainerProductosMejoresOfertas/MainContainerProductosOfertas'
import { CarritoContext } from '../../context/CarritoContext'
import TarjetaProductoDetalleDescuento from './TarjetaProductoDetalleDescuento'

const TarjetaProductoDetalle = ({productos}) => {
    const { agregarAlCarrito } = useContext(CarritoContext)
    let {id} = useParams()
    let producto = productos.find(producto => producto.id == id)
    const [contador, setContador] = useState(0)
    let incrementar = () =>{
        contador < producto.stock && setContador(contador+1)
    }

    let decrementar = () =>{
        contador > 0 && setContador(contador-1)
    }

    let agregar = (producto, cantidad) =>{ 
        agregarAlCarrito(producto, cantidad)
        setContador(0)
    }

    return (
        <>
    <div className='tarjetaProductoDetalle'>
        <div className='tarjetaProductoDetalleImgContainer'>
            <img src={producto.img}/>
        </div>

        <div className="tarjetaProductoDetalleInfo">
            <h2>{producto.nombre}</h2>
            <h3>{producto.marca}</h3>
            {
                producto.descuento > 0 && <h4 className='tarjetaProductoDetalleSinDescuento'>{producto.precioSinDescuento}</h4>
            }
            {
                producto.descuento > 0 && <TarjetaProductoDetalleDescuento producto={producto}/>
            }
            <h2>${producto.precio}</h2>
            <h4 className='tarjetaProductoDetalleInfoIva'>*Todos los precios incluyen IVA, excepto la provincia de Tierra Del Fuego</h4>
            
            <div className="tarjetaProductoDetalleContadorCarritoContainer">
            <div className="tarjetaProductoDetalleContador">
                <img onClick={decrementar} src="/assets/imagenes/remove.png" alt="icono restar unidad" />
                    <h3>{contador}</h3>
                <img onClick={incrementar} src="/assets/imagenes/add.png" alt="icono agregar unidad" />
            </div>
            <img onClick={()=>agregar(producto, contador)} className='tarjetaProductoDetalleAgregarAlCarrito' src="/assets/imagenes/agregar (2).png" alt="icono agregar carrito" />
            </div>
        </div>
    </div>

    <div className="tarjetaProductoDetalleDescripcion">
                <h2>Descripción:</h2>
                <h3>{producto.descripcion}</h3>
            </div>

            <MainContainerProductosOfertas productos={productos}/>
    </>
  )
}

export default TarjetaProductoDetalle
