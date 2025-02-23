import React from 'react'
import ListadoProductos from '../ListadoProductos'



const AderezosYCondimentos = ({productos}) => {

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
