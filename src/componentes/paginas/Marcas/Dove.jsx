import React from 'react'
import ListadoProductos from '../ListadoProductos'

const Dove = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Dove"
  )
  return (
    <ListadoProductos productos={productosFiltrados} categoria="Dove"/>
  )
}

export default Dove