import React from 'react'
import TarjetaProducto from '../main/TarjetaProducto/TarjetaProducto'
import TarjetaProductoDetalle from './TarjetaProductoDetalle'
import './ProductoDetalle.scss'

const ProductoDetalle = ({productos}) => {
  return (
    <>
        <TarjetaProductoDetalle productos={productos}/>
    </>
  )
}

export default ProductoDetalle
