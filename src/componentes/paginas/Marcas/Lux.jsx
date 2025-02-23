import React from 'react'

import ListadoProductos from '../ListadoProductos'

const Lux = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.marca==="Lux"
  )
  return (
    <ListadoProductos productos={productosFiltrados} titulo="Lux"/>
  )
}

export default Lux
