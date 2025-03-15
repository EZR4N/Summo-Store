import React, { useContext } from 'react'
import { ProductosContext } from '../../context/ProductosContext'
import ListadoProductos from './ListadoProductos'
import { useParams } from 'react-router-dom'

const BusquedaProductos = () => {
    const { busqueda } = useParams()
    const { productos } = useContext(ProductosContext)
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    return (
    <div>
        <ListadoProductos productos={productosFiltrados} titulo={`Productos encontrados con la búsqueda: ${busqueda}`}/>
    </div>
  )
}

export default BusquedaProductos