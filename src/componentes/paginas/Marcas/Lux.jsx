import React from 'react'

import ListadoProductos from '../ListadoProductos'

const Lux = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Lux"
  )
  return (
    <ListadoProductos productos={productosFiltrados} categoria="Lux"/>
  )
}

export default Lux
