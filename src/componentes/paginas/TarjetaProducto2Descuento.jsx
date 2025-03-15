import React from 'react'
import "./TarjetaProducto2Descuento.scss"

const TarjetaProducto2Descuento = ({producto}) => {
  return (
    <div className='tarjetaProducto2DescuentoContainer'>
        <img src="/assets/imagenes/pricetag-outline.png" alt="Descuento icono" />
        <h3> -{producto.descuento}% </h3>
    </div>
  )
}

export default TarjetaProducto2Descuento