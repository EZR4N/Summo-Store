import React, {lazy, Suspense} from 'react'

import CarouselMain from '../main/Carrousel/Carousel'
import NuestrosProductos from '../main/NuestrosProductos/NuestrosProductos'
import Categorias from '../main/Categorías/Categorias'
import ContainerAyudaApp from '../main/ContainerAyudaApp/ContainerAyudaApp'
import MainContainerBanner from '../main/MainContainerBanner/MainContainerBanner'
import MoonLoader from 'react-spinners/MoonLoader'

const Home = () => {
    const MainContainerProductosLanzamientos = lazy(() => import('../main/MainContainerProductosLanzamientos/MainContainerProductosLanzamientos'))
    const MainContainerProductosMasVendidos = lazy(() => import('../main/MainContainerProductosMasVendidos/MainContainerProductosMasVendidos'))
    const MainContainerProductosOfertas = lazy(() => import ('../main/MainContainerProductosMejoresOfertas/MainContainerProductosOfertas'))
    return (
    <>
    

    
      <CarouselMain/>
      <NuestrosProductos/> 
      <Categorias/>
      <ContainerAyudaApp/>
          <Suspense
          fallback={
            <div className='loader-container'>
              <MoonLoader color='F88A1B' size={50}/>
            </div>
          }
          >
            <MainContainerProductosOfertas />
            <MainContainerProductosLanzamientos />
          </Suspense>
      <MainContainerBanner/>
        <Suspense
        fallback={
          <div className='loader-container'>
            <MoonLoader color='F88A1B' size={50}/>
          </div>
        }>
          <MainContainerProductosMasVendidos />
        </Suspense>

    </>
  )
}

export default Home
