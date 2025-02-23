import React from 'react'
import ListadoProductos from '../ListadoProductos'

const Axe = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Axe"
  )
  return (
    <ListadoProductos productos={productosFiltrados} titulo="Axe"/>
  )
}

export default Axe
