import React from 'react'
import ListadoProductos from '../ListadoProductos'

const Skip = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Skip"
  )
  return (
    <ListadoProductos productos={productosFiltrados} categoria="Skip"/>
  )
}

export default Skip
