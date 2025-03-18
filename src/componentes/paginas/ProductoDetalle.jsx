import React, { useContext } from 'react'
import TarjetaProductoDetalle from './TarjetaProductoDetalle'
import './ProductoDetalle.scss'
import { ProductosContext } from '../../context/ProductosContext'
import  MoonLoader  from 'react-spinners/MoonLoader'
const ProductoDetalle = () => {
  const { productos, loading } = useContext(ProductosContext)
  return (
    <>
    {
      loading?(
        <div className='productoDetalleSpinner'>
        <MoonLoader
        color="#F88A1B"
        size={100}/>
        </div>
      ):(
        <TarjetaProductoDetalle productos={productos}/>
      )
      }
    </>
  )
}

export default ProductoDetalle
