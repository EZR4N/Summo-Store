import React, { useContext } from 'react'
import ListadoProductos from '../ListadoProductos'
import { ProductosContext } from '../../../context/ProductosContext'

const Hellmanns = () => {
  const { productos } = useContext(ProductosContext)
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Hellmanns"
  )
  return (
    <ListadoProductos productos={productosFiltrados} titulo="Hellmann's"/>
  )
}

export default Hellmanns
