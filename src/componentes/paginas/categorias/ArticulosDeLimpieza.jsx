import React, { useContext } from 'react'
import ListadoProductos from '../ListadoProductos'
import { ProductosContext } from '../../../context/ProductosContext'

const ArticulosDeLimpieza = () => {
  const { productos } = useContext(ProductosContext)
  let productosFiltrados = productos.filter(producto =>
    producto.categoria ==="articulosDeLimpieza"  
  )

  return (
  <>
    <ListadoProductos productos={productosFiltrados} titulo="Articulos de limpieza"/>
  </>
  )
}

export default ArticulosDeLimpieza
