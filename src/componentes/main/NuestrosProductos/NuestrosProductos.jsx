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
            <NuestrosProductosTarjeta ruta="/marcas/knorr"  img="/assets/imagenes/Knorr.png" clase="mainNuestrosProductosTarjetaKnorr"/>
            


            <NuestrosProductosTarjeta ruta="/marcas/axe" img="/assets/imagenes/AXE.png" clase="mainNuestrosProductosTarjetaAxe"/>

            <NuestrosProductosTarjeta ruta="/marcas/Cif"  img="/assets/imagenes/CIF.png" clase="mainNuestrosProductosTarjetaCif"/>
                    
            <NuestrosProductosTarjeta ruta="/marcas/dove" img="/assets/imagenes/DOVE.png" clase="mainNuestrosProductosTarjetaDove"/>

            <NuestrosProductosTarjeta ruta="/marcas/hellmanns" img="/assets/imagenes/HELLMANS.png" clase="mainNuestrosProductosTarjetaHellmanns"/>
            
            <NuestrosProductosTarjeta ruta="/marcas/lux"  img="/assets/imagenes/LUX.png" clase="mainNuestrosProductosTarjetaLux"/>
            
            <NuestrosProductosTarjeta ruta="/marcas/rexona" img="/assets/imagenes/REXONA.png" clase="mainNuestrosProductosTarjetaRexona"/>
            
            <NuestrosProductosTarjeta ruta="/marcas/sedal" img="/assets/imagenes/Sedal.png" clase="mainNuestrosProductosTarjetaSedal"/>
            
            <NuestrosProductosTarjeta ruta="/marcas/skip" img="/assets/imagenes/SKIP.png" clase="mainNuestrosProductosTarjetaSkip"/>
            
        </div>

        <div className='mainDivNuestrosProductosVerTodas'>
            <h3>Ver todos los productos</h3>
            <img src="/assets/imagenes/chevron-forward-sharp.png" alt="" />
        </div>
    </>
  )
}

export default NuestrosProductos
