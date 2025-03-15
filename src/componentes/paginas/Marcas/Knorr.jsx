import React, { useContext } from 'react'
import ListadoProductos from '../ListadoProductos'
import { ProductosContext } from '../../../context/ProductosContext'

const Knorr = () => {
  const { productos } = useContext(ProductosContext)
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Knorr"
  )
  return (
    <ListadoProductos productos={productosFiltrados} titulo="Knorr"/>
  )
}

export default Knorr
