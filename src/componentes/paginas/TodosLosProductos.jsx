import React, { useContext } from 'react'
import ListadoProductos from './ListadoProductos'
import { ProductosContext } from '../../context/ProductosContext'

const TodosLosProductos = () => {
  const { productos } = useContext(ProductosContext)
  return (
    <div>
        <ListadoProductos productos={productos} titulo="Todos los productos"/>
    </div>
  )
}

export default TodosLosProductos