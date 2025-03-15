import React, { useContext } from 'react'
import ListadoProductos from '../ListadoProductos'
import { ProductosContext } from '../../../context/ProductosContext'

const Cif = () => {
  const { productos} = useContext(ProductosContext)
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Cif"
  )
  return (
    <ListadoProductos productos={productosFiltrados} titulo="Cif"/>
  )
}

export default Cif
