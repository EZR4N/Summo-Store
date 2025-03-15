import React, { useContext } from 'react'
import ListadoProductos from '../ListadoProductos'
import { ProductosContext } from '../../../context/ProductosContext'

const Sedal = () => {
    const { productos } = useContext(ProductosContext)
    let productosFiltrados = productos.filter(producto =>
      producto.marca=="Sedal"
    )
  return (
    <>
      <ListadoProductos productos={productosFiltrados} titulo="Sedal"/>
    </>
  )
}

export default Sedal
