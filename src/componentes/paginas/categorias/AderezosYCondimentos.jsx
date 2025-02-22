import React from 'react'
import ListadoProductos from '../ListadoProductos'



const AderezosYCondimentos = ({productos}) => {

  let productosFiltrados = productos.filter(producto =>
    producto.categoria ==="aderezosyCondimentos"  
  )

  return (
  <>
    <ListadoProductos productos={productosFiltrados} categoria="Aderezos"/>
  </>
  )
}

export default AderezosYCondimentos
