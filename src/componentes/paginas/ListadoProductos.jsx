import React from 'react'
import TarjetaProducto2 from './TarjetaProducto2'
import './ListadoProductos.scss'


const ListadoProductos = ({productos, categoria}) => {
  
  return (
    <>
    <div className='listadoProductosContainer'>
      <div className='listadoProductosFiltros'>
        <h3>Proximamente filtros de busqueda!</h3>
      </div>

      
      <div className="listadoProductosProductos">
      <div className="listadoProductosTitulo">
            <h2>{categoria}</h2>
            <h3>{productos.length} productos encontrados </h3>
      </div>
      {productos.map((producto) => (
          <TarjetaProducto2 key={producto.id} className="tarjetaListadoProductos" idProducto={producto.id} imagenProducto={producto.img} producto={producto.nombre} marca={producto.marca} precio={producto.precio} stock={producto.stock}/> 
        )
        )}
        </div>
    </div>
    </>
  )
}

export default ListadoProductos