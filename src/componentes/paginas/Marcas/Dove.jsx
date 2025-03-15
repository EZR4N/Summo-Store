import React, {useContext} from 'react'
import ListadoProductos from '../ListadoProductos'
import { ProductosContext } from '../../../context/ProductosContext'

const Dove = () => {
  const { productos } = useContext(ProductosContext)
  let productosFiltrados = productos.filter(producto =>
    producto.marca=="Dove"
  )
  return (
    <ListadoProductos productos={productosFiltrados} titulo="Dove"/>
  )
}

export default Dove
