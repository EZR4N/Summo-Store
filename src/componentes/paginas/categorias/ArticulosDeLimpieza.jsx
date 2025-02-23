import React from 'react'
import ListadoProductos from '../ListadoProductos'

const ArticulosDeLimpieza = ({productos}) => {
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
