import React, { useContext } from 'react'
import { ProductosContext } from '../../context/ProductosContext'
import ListadoProductos from './ListadoProductos'
import { useParams } from 'react-router-dom'
import MoonLoader from 'react-spinners/MoonLoader'

const BusquedaProductos = () => {
    const { busqueda } = useParams()
    const { productos, loading } = useContext(ProductosContext)
    const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    return (
    loading?(
      <div className='productoBusquedaSpinner'>
        <MoonLoader
        color="#F88A1B"
        size={100}/>
        </div>
    ):(
    <div>
        <ListadoProductos productos={productosFiltrados} titulo={`Productos encontrados con la búsqueda: ${busqueda}`}/>
    </div>
    )
  )
}

export default BusquedaProductos