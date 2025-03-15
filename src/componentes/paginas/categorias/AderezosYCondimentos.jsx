import React, { useContext } from 'react'
import ListadoProductos from '../ListadoProductos'
import { ProductosContext } from '../../../context/ProductosContext'



const AderezosYCondimentos = () => {
  const { productos } = useContext(ProductosContext)
  let productosFiltrados = productos.filter(producto =>
    producto.categoria ==="aderezosyCondimentos"  
  )

  return (
  <>
    <ListadoProductos productos={productosFiltrados} titulo="Aderezos y condimentos"/>
  </>
  )
}

export default AderezosYCondimentos
