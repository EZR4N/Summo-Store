import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainContainerProductosOfertas from '../main/MainContainerProductosMejoresOfertas/MainContainerProductosOfertas'
import { CarritoContext } from '../../context/CarritoContext'
import TarjetaProductoDetalleDescuento from './TarjetaProductoDetalleDescuento'
import ProductoDetalleAgregado from './TarjetaProductoDetalleAgregado'

const TarjetaProductoDetalle = ({productos}) => {
    const { agregarAlCarrito } = useContext(CarritoContext)
    const [agregado, setAgregado] = useState(false)
    let {id} = useParams()
    let producto = productos.find(producto => producto.id == id)
    const [contador, setContador] = useState(0)
    let incrementar = () =>{
        contador < producto.stock && setContador((prev) => prev +1)
    }

    let decrementar = () =>{
        contador > 0 && setContador((prev) => prev-1)
    }

    let agregar = (producto, cantidad) =>{ 
        if (contador > 0 ){
        agregarAlCarrito(producto, cantidad)
        setAgregado(true)
        setContador(0)
        }
    }

    useEffect(() => {
        setAgregado(false)
    }, [id])

    return (
        <>
    <div className='tarjetaProductoDetalle'>
        <div className='tarjetaProductoDetalleImgContainer'>
            <img src={producto.img}/>
        </div>

        <div className="tarjetaProductoDetalleInfo">
            <h2 className='tarjetaProductoDetalleNombre'>{producto.nombre}</h2>
            <h3 className='tarjetaProductoDetalleMarca'>{producto.marca}</h3>
            <div className='tarjetaProductoDetallePrecioDiv'>
            <h2 className='tarjetaProductoDetallePrecio'>${producto.precio}</h2>
            {
                producto.descuento > 0 && <h4 className='tarjetaProductoDetalleSinDescuento'>{producto.precioSinDescuento}</h4>
            }
            {
                producto.descuento > 0 && <TarjetaProductoDetalleDescuento producto={producto}/>
            }
            </div>
            <h4 className='tarjetaProductoDetalleInfoIva'>*Todos los precios incluyen IVA, excepto la provincia de Tierra Del Fuego</h4>
            
            {
                agregado?(
                    <>
                    <ProductoDetalleAgregado/>
                    </>
                ):(
                    <>
            <div className="tarjetaProductoDetalleContadorCarritoContainer">
            <div className="tarjetaProductoDetalleContador">
                <img onClick={decrementar} src="/assets/imagenes/remove.png" alt="icono restar unidad" />
                    <h3>{contador}</h3>
                <img onClick={incrementar} src="/assets/imagenes/add.png" alt="icono agregar unidad" />
            </div>
            <img onClick={()=>agregar(producto, contador)} className='tarjetaProductoDetalleAgregarAlCarrito' src="/assets/imagenes/agregar (2).png" alt="icono agregar carrito" />
            </div>
                    </>
                )
            }
        </div>
    </div>

    <div className="tarjetaProductoDetalleDescripcion">
                <h2>Descripción</h2>
                <h3>{producto.descripcion}</h3>
    </div>

            <MainContainerProductosOfertas productos={productos}/>
    </>
  )
}

export default TarjetaProductoDetalle
