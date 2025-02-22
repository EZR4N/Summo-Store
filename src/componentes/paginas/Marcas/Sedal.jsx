import React from 'react'
import ListadoProductos from '../ListadoProductos'

const Sedal = ({productos}) => {
    let productosFiltrados = productos.filter(producto =>
      producto.marca=="Sedal"
    )
  return (
    <>
      <ListadoProductos productos={productosFiltrados} categoria="Sedal"/>
    </>
  )
}

export default Sedal
