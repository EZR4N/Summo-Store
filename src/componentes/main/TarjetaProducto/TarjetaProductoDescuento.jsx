import React from 'react'
import "./TarjetaProductoDescuento.scss"
const TarjetaProductoDescuento = ({producto}) => {
  return (
    <div className='tarjetaProductoDescuentoContainer'>
        <img src="/assets/imagenes/pricetag-outline.png" alt="Descuento icono" />
        <h3 className='tarjetaProductoDescuento'> -{producto.descuento}% </h3>
    </div>
  )
}

export default TarjetaProductoDescuento