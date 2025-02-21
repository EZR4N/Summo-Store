import React from 'react'
import ListadoProductos from '../ListadoProductos'

const Rexona = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Rexona"
  )
  return (
    <ListadoProductos productos={productosFiltrados} categoria="Rexona"/>
  )
}

export default Rexona