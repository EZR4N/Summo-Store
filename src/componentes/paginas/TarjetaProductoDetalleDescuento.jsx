import React from 'react'
import "./TarjetaProductoDetalleDescuento.scss"
const TarjetaProductoDetalleDescuento = ({producto}) => {

  return (
    
        <div className='tarjetaProductoDetalleDescuentoContainer'>
        <img src="/assets/imagenes/pricetag-outline.png" alt="Descuento icono" />
        <h3> -{producto.descuento}% </h3>
    </div>
    
  )
}

export default TarjetaProductoDetalleDescuento