import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import MainContainerProductosOfertas from '../main/MainContainerProductosMejoresOfertas/MainContainerProductosOfertas'
import { CarritoContext } from '../../context/CarritoContext'

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
            <h2>${producto.precio}</h2>
            <h4 className='tarjetaProductoDetalleInfoIva'>*Todos los precios incluyen IVA, excepto la provincia de Tierra Del Fuego</h4>
            
            <div className="tarjetaProductoDetalleContadorCarritoContainer">
            <div className="tarjetaProductoDetalleContador">
                <img onClick={decrementar} src="\src\assets\imagenes\remove.png" alt="icono restar unidad" />
                    <h3>{contador}</h3>
                <img onClick={incrementar} src="\src\assets\imagenes\add.png" alt="icono agregar unidad" />
            </div>
            <img onClick={()=>agregar(producto, contador)} className='tarjetaProductoDetalleAgregarAlCarrito' src="\src\assets\imagenes\agregar (2).png" alt="icono agregar carrito" />
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