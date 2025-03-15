import React from 'react'
import CarouselMain from '../main/Carrousel/Carousel'
import NuestrosProductos from '../main/NuestrosProductos/NuestrosProductos'
import Categorias from '../main/Categorías/Categorias'
import ContainerAyudaApp from '../main/ContainerAyudaApp/ContainerAyudaApp'

import MainContainerProductosLanzamientos from '../main/MainContainerProductosLanzamientos/MainContainerProductosLanzamientos'
import MainContainerBanner from '../main/MainContainerBanner/MainContainerBanner'
import MainContainerProductosMasVendidos from '../main/MainContainerProductosMasVendidos/MainContainerProductosMasVendidos'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'
import MainContainerProductosOfertas from '../main/MainContainerProductosMejoresOfertas/MainContainerProductosOfertas'
const Home = () => {
  return (
    <>
    

    
      <CarouselMain/>
      <NuestrosProductos/> 
      <Categorias/>
      <ContainerAyudaApp/>     
      <MainContainerProductosOfertas />
      <MainContainerProductosLanzamientos />
      <MainContainerBanner/>
      <MainContainerProductosMasVendidos />
      

    </>
  )
}

export default Home
