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
            <NuestrosProductosTarjeta ruta="/marcas/knorr"  img="\src\assets\imagenes\Knorr.png" clase="mainNuestrosProductosTarjetaKnorr"/>
            


            <NuestrosProductosTarjeta ruta="/marcas/axe" img="\src\assets\imagenes\Axe.png" clase="mainNuestrosProductosTarjetaAxe"/>

            <NuestrosProductosTarjeta ruta="/marcas/Cif"  img="\src\assets\imagenes\Cif.png" clase="mainNuestrosProductosTarjetaCif"/>
                    
            <NuestrosProductosTarjeta ruta="/marcas/dove" img="\src\assets\imagenes\Dove.png" clase="mainNuestrosProductosTarjetaDove"/>

            <NuestrosProductosTarjeta ruta="/marcas/hellmanns" img="\src\assets\imagenes\Hellmans.png" clase="mainNuestrosProductosTarjetaHellmanns"/>
            
            <NuestrosProductosTarjeta ruta="/marcas/lux"  img="\src\assets\imagenes\Lux.png" clase="mainNuestrosProductosTarjetaLux"/>
            
            <NuestrosProductosTarjeta ruta="/marcas/rexona" img="\src\assets\imagenes\Rexona.png" clase="mainNuestrosProductosTarjetaRexona"/>
            
            <NuestrosProductosTarjeta ruta="/marcas/sedal" img="\src\assets\imagenes\Sedal.png" clase="mainNuestrosProductosTarjetaSedal"/>
            
            <NuestrosProductosTarjeta ruta="/marcas/skip" img="\src\assets\imagenes\Skip.png" clase="mainNuestrosProductosTarjetaSkip"/>
            
        </div>

        <div className='mainDivNuestrosProductosVerTodas'>
            <h3>Ver todos los productos</h3>
            <img src="/src/assets/imagenes/chevron-forward-sharp.png" alt="" />
        </div>
    </>
  )
}

export default NuestrosProductos