import React from 'react'
import ListadoProductos from '../ListadoProductos'

const Hellmanns = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Hellmanns"
  )
  return (
    <ListadoProductos productos={productosFiltrados} categoria="Hellmanns"/>
  )
}

export default Hellmanns