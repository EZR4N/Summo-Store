import React from 'react'
import "./Categorias.scss"


import Tarjeta from '../Tarjeta/Tarjeta'
const Categorias = () => {
  return (
    <>
    <div className='mainCategoriasTitulo'>
        <h2>
            Categorías
        </h2>
    </div>

    <div className='mainCategoriasDivTarjetas'>
    <Tarjeta ruta="/categorias/articulos-de-limpieza" img="/assets/imagenes/Categoria.png" clase="mainCategoriaTarjetaArticulosDeLimpieza">
      <h2 className="mainCategoriaTitulo">  Articulos de limpieza </h2>
    </Tarjeta>
    <Tarjeta ruta="/categorias/aderezos-y-condimentos" img="/assets/imagenes/Categoria.png" clase="mainCategoriaTarjetaAderezosyCondimentos">
    <h2 className="mainCategoriaTitulo">  Aderezos y condimentos </h2>
    </Tarjeta>
    <Tarjeta ruta="/categorias/higiene-personal"  img="/assets/imagenes/Categoria.png" clase="mainCategoriaTarjetaHigienePersonal">
    <h2 className="mainCategoriaTitulo">  Higiene personal </h2>
    </Tarjeta>
    
    </div>

    <div className='mainCategoriasVerTodas'>
    <h3>Ver todas las categorías</h3>
    <img src="/assets/imagenes/chevron-forward-sharp.png" alt="" />
    </div>

    </>
  )
}

export default Categorias
