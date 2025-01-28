import React from 'react'
import ListadoProductos from '../ListadoProductos'
import { useParams } from 'react-router-dom'

const HigienePersonal = ({productos}) => {
  let productosFiltrados = productos.filter(producto =>
    producto.categoria ==="higienePersonal"  
  )

  let {id} = useParams()
  return (
    <>
    <ListadoProductos productos={productosFiltrados} categoria="Accesorios De Limpieza"/>
    </>
  )
}

export default HigienePersonal