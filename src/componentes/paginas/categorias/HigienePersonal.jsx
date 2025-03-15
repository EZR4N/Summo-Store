import React, { useContext } from 'react'
import ListadoProductos from '../ListadoProductos'
import { ProductosContext } from '../../../context/ProductosContext'

const HigienePersonal = () => {
  const { productos } = useContext(ProductosContext)
  let productosFiltrados = productos.filter(producto =>
    producto.categoria ==="higienePersonal"  
  )

  
  return (
    <>
    <ListadoProductos productos={productosFiltrados} titulo="Higiene personal"/>
    </>
  )
}

export default HigienePersonal
