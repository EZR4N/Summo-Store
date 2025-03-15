import React, { useContext } from 'react'

import ListadoProductos from '../ListadoProductos'
import { ProductosContext } from '../../../context/ProductosContext'

const Lux = () => {
  const { productos } = useContext(ProductosContext)
  let productosFiltrados = productos.filter(producto =>
    producto.marca==="Lux"
  )
  return (
    <ListadoProductos productos={productosFiltrados} titulo="Lux"/>
  )
}

export default Lux
