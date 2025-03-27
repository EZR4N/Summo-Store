import React, { useState, useMemo } from 'react'
import TarjetaProducto2 from './TarjetaProducto2'
import './ListadoProductos.scss'


const ListadoProductos = ({productos, titulo}) => {
  
  const [filters, setFilters ] = useState({
    descuento: false,
    lanzamiento: false,
    orden: 'AZ'
  })

  const productosFiltrados = useMemo( () => {

    let filtrados = [...productos]
  
    if (filters.descuento) {
      filtrados = filtrados.filter((p) => p.descuento)
    }
    if (filters.lanzamiento) {
      filtrados = filtrados.filter((p) => p.lanzamiento)
    }

    switch (filters.orden) {
      case 'menor-mayor':
        filtrados.sort((a, b) => a.precio - b.precio)
        break
      case 'mayor-menor':
        filtrados.sort ((a, b) => b.precio - a.precio)
        break
      case 'AZ':
        filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre))
        break
      case 'ZA':
        filtrados.sort((a, b) => b.nombre.localeCompare(a.nombre))
        break
      default:
        break
    }
    return filtrados
  }, [productos, filters])
  
  
  
  
  return (
    <div className="listadoProductosContainer">
      {productos.length === 0 ? (
        <>
        <div className='listadoProductosSinProductos'>
          <h2>
            No se encontraron productos
          </h2>
          <img src="/assets/imagenes/grumpy.webp" alt="grumpy" />
        </div>
        </>
      ) : (
        <>
          <div className="listadoProductosFiltros">
            <h3 className="listadoProductosFiltrosTitulo">Filtros</h3>

            <form className="listadoProductosFiltrosForm" onSubmit={(e) => e.preventDefault()}>
              <div className="listadoProductosFiltrosDescuento">
                <input
                  name="descuento"
                  checked={filters.descuento}
                  onChange={(e) => setFilters({ ...filters, descuento: e.target.checked })}
                  id="descuento"
                  type="checkbox"
                />
                <label htmlFor="descuento">Descuento</label>
              </div>

              <div className="listadoProductosFiltrosLanzamiento">
                <input
                  name="lanzamiento"
                  checked={filters.lanzamiento}
                  onChange={(e) => setFilters({ ...filters, lanzamiento: e.target.checked })}
                  id="lanzamiento"
                  type="checkbox"
                />
                <label htmlFor="lanzamiento">Lanzamiento</label>
              </div>

              <div>
                <p>Ordenar por:</p>
                <select
                  name="orden"
                  value={filters.orden}
                  onChange={(e) => setFilters({ ...filters, orden: e.target.value })}
                >
                  <option value="menor-mayor">Precio: de menor a mayor</option>
                  <option value="mayor-menor">Precio: de mayor a menor</option>
                  <option value="AZ">Nombre: A~Z</option>
                  <option value="ZA">Nombre Z~A</option>
                </select>
              </div>
            </form>
          </div>

          <div className="listadoProductosProductos">
            <div className="listadoProductosTitulo">
              <h2>{titulo}</h2>
              <h3 className='listadoProductosEncontrados'>{productosFiltrados.length} productos encontrados</h3>
            </div>

            {productosFiltrados.map((producto) => (
              <TarjetaProducto2 key={producto.id} className="tarjetaListadoProductos" producto={producto} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default ListadoProductos
