import React, { useContext } from 'react'
import ListadoProductos from '../ListadoProductos'
import { ProductosContext } from '../../../context/ProductosContext'

const Rexona = () => {
  const { productos } = useContext(ProductosContext)
  let productosFiltrados = productos.filter(producto =>
    producto.marca==="Rexona"
  )
  return (
    <ListadoProductos productos={productosFiltrados} titulo="Rexona"/>
  )
}

export default Rexona
