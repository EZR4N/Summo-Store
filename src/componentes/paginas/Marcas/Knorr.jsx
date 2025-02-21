import React from 'react'
import ListadoProductos from '../ListadoProductos'

const Knorr = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Knorr"
  )
  return (
    <ListadoProductos productos={productosFiltrados} categoria="Knorr"/>
  )
}

export default Knorr