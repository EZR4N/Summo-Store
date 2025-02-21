
import "./Media.scss"
import './App.scss'
import {  CarritoProvider } from './context/CarritoContext';
import { db } from './services/config';
import { collection, addDoc, getDocs, query  } from 'firebase/firestore';
import { useState, useEffect } from 'react'


// Páginas


//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

//Router
import {BrowserRouter, Route, Routes} from "react-router-dom"

import ArticulosDeLimpieza from './componentes/paginas/categorias/ArticulosDeLimpieza'
import AderezosYCondimentos from './componentes/paginas/categorias/AderezosYCondimentos'
import HigienePersonal from './componentes/paginas/categorias/HigienePersonal'

import Axe from './componentes/paginas/Marcas/Axe'
import Cif from './componentes/paginas/Marcas/Cif'
import Dove from './componentes/paginas/Marcas/Dove'
import Hellmanns from './componentes/paginas/Marcas/Hellmanns'
import Knorr from './componentes/paginas/Marcas/Knorr'
import Lux from './componentes/paginas/Marcas/Lux'
import Rexona from './componentes/paginas/Marcas/Rexona'
import Sedal from './componentes/paginas/Marcas/Sedal'
import Skip from './componentes/paginas/Marcas/Skip'

import Home from './componentes/home/Home';
import Footer from './componentes/footer/Footer';
import NavBar from './componentes/navBar/NavBar';
import ProductoDetalle from './componentes/paginas/ProductoDetalle';
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';


function App() {

    const  [productos, setProductos] = useState ([])
    
        useEffect( () =>{
          const misProductos = query(collection(db, 'productos'))
          getDocs(misProductos)
            .then(res=>{
              const nuevosProductos = res.docs.map(doc =>{
                const data = doc.data()
                return {id: doc.id, ...data}
              })
              setProductos(nuevosProductos)
            })
            .catch((error) => console.error("error al recibir los productos", error))
        },[])
  
  return (
    <>

    

    <BrowserRouter>
    <CarritoProvider>
    <header>
    <NavBar/>
    </header>

    <main>
        <Routes>
          <Route path='/' element={<Home productos={productos}/>}/>
          
          <Route path="/item/:id" element={<ProductoDetalle productos={productos} />}/>

          //Categorías
          <Route path='/categorias/articulos-de-limpieza' element={<ArticulosDeLimpieza productos={productos}/>}/>
          <Route path='/categorias/aderezos-y-condimentos' element={<AderezosYCondimentos productos={productos}/>}/>
          <Route path='/categorias/higiene-personal' element={<HigienePersonal productos={productos}/>}/>


          //Marcas
          <Route path='/marcas/Axe' element={<Axe productos={productos}/>}/>
          <Route path='/marcas/Cif' element={<Cif productos={productos}/>}/>
          <Route path='/marcas/Dove' element={<Dove productos={productos}/>}/>
          <Route path='/marcas/Hellmanns' element={<Hellmanns productos={productos}/>}/>
          <Route path='/marcas/Knorr' element={<Knorr productos={productos}/>}/>
          <Route path='/marcas/Lux' element={<Lux productos={productos}/>}/>
          <Route path='/marcas/Rexona' element={<Rexona productos={productos}/>}/>
          <Route path='/marcas/Sedal' element={<Sedal productos={productos}/>}/>
          <Route path='/marcas/Skip' element={<Skip productos={productos}/>}/>
          
          // Cart

          <Route path='/carrito' element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>

    </main>
        <footer>
        <Footer/>
        </footer>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App
