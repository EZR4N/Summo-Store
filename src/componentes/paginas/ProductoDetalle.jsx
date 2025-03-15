import React, { useContext } from 'react'
import TarjetaProductoDetalle from './TarjetaProductoDetalle'
import './ProductoDetalle.scss'
import { ProductosContext } from '../../context/ProductosContext'

const ProductoDetalle = () => {
  const { productos } = useContext(ProductosContext)
  return (
    <>
        <TarjetaProductoDetalle productos={productos}/>
    </>
  )
}

export default ProductoDetalle
