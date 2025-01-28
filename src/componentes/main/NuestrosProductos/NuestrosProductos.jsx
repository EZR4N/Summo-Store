import React from 'react'
import "./NuestrosProductos.scss"
import { Link } from 'react-router-dom'
import NuestrosProductosTarjeta from '../Tarjeta/Tarjeta'
const NuestrosProductos = () => {
  return (
    <>
    <div className='mainDivNuestrosProductosTitulo'>
        <h2>
            Nuestros Productos
        </h2>

    </div>
        <div className='mainDivNuestrosProductosTarjetas'>
            <Link to="/marcas/knorr">
            <NuestrosProductosTarjeta  img="\src\assets\imagenes\Knorr.png" clase="mainNuestrosProductosTarjetaKnorr"/>
            </Link>

            <Link to="/marcas/axe">
            <NuestrosProductosTarjeta  img="\src\assets\imagenes\Axe.png" clase="mainNuestrosProductosTarjetaAxe"/>
            </Link>

            <Link to="/marcas/Cif">
            <NuestrosProductosTarjeta  img="\src\assets\imagenes\Cif.png" clase="mainNuestrosProductosTarjetaCif"/>
            </Link>
            
            <Link to="/marcas/Dove">
            <NuestrosProductosTarjeta  img="\src\assets\imagenes\Dove.png" clase="mainNuestrosProductosTarjetaDove"/>
            </Link>
            
            <Link to="/marcas/hellmanns">
            <NuestrosProductosTarjeta  img="\src\assets\imagenes\Hellmans.png" clase="mainNuestrosProductosTarjetaHellmanns"/>
            </Link>

            <Link to="/marcas/Lux">
            <NuestrosProductosTarjeta  img="\src\assets\imagenes\Lux.png" clase="mainNuestrosProductosTarjetaLux"/>
            </Link>
            
            <Link to="/marcas/rexona">
            <NuestrosProductosTarjeta  img="\src\assets\imagenes\Rexona.png" clase="mainNuestrosProductosTarjetaRexona"/>
            </Link>
            
            <Link to="/marcas/Sedal">
            <NuestrosProductosTarjeta  img="\src\assets\imagenes\Sedal.png" clase="mainNuestrosProductosTarjetaSedal"/>
            </Link>
            
            <Link to="/marcas/Skip">
            <NuestrosProductosTarjeta  img="\src\assets\imagenes\Skip.png" clase="mainNuestrosProductosTarjetaSkip"/>
            </Link>
        </div>

        <div className='mainDivNuestrosProductosVerTodas'>
            <h3>Ver todos los productos</h3>
            <img src="\public\imagenes\chevron-forward-sharp.png" alt="" />
        </div>
    </>
  )
}

export default NuestrosProductos