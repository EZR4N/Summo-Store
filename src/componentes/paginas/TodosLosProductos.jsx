import React from 'react'
import ListadoProductos from './ListadoProductos'

const TodosLosProductos = ({productos}) => {
  return (
    <div>
        <ListadoProductos productos={productos} titulo="Todos los productos"/>
    </div>
  )
}

export default TodosLosProductos