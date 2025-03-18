import React from 'react'
import './ProductoDetalleAgregado.scss'

const ProductoDetalleAgregado = () => {
  return (
    <>
    <div className='productoDetalleAgregadoHeaderContainer'>
        <img src="\assets\imagenes\checkmark-sharp.png" alt="Checked!" />
        <p>se ha agregado tu producto al carrito</p>
    </div>

    <div className='productoDetalleAgregadoContainer'>
    <p>Agregado al carrito! 👍</p>
    </div>
    </>
  )
}

export default ProductoDetalleAgregado