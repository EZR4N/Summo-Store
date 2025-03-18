
import "./Media.scss"
import './App.scss'
import {  CarritoProvider } from './context/CarritoContext';
import { ProductosProvider } from "./context/ProductosContext";

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
import TodosLosProductos from './componentes/paginas/TodosLosProductos'
import BusquedaProductos from "./componentes/paginas/BusquedaProductos";

function App() {
  return (
    <>

    

    <BrowserRouter>
    <ProductosProvider>
    <CarritoProvider>
    <header>
    <NavBar/>
    </header>

    <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          
          <Route path="/item/:id" element={<ProductoDetalle  />}/>
          <Route path="/busqueda/:busqueda" element={<BusquedaProductos/>}/>
          //Categorías
          <Route path='/categorias/articulos-de-limpieza' element={<ArticulosDeLimpieza />}/>
          <Route path='/categorias/aderezos-y-condimentos' element={<AderezosYCondimentos />}/>
          <Route path='/categorias/higiene-personal' element={<HigienePersonal />}/>


          //Marcas
          <Route path='/marcas/Axe' element={<Axe />}/>
          <Route path='/marcas/Cif' element={<Cif />}/>
          <Route path='/marcas/Dove' element={<Dove/>}/>
          <Route path='/marcas/Hellmanns' element={<Hellmanns/>}/>
          <Route path='/marcas/Knorr' element={<Knorr/>}/>
          <Route path='/marcas/Lux' element={<Lux/>}/>
          <Route path='/marcas/Rexona' element={<Rexona/>}/>
          <Route path='/marcas/Sedal' element={<Sedal/>}/>
          <Route path='/marcas/Skip' element={<Skip/>}/>
          
          // Cart

          <Route path='/carrito' element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>

          // Listados de productos filtrados
          <Route path='/productos' element={<TodosLosProductos/>} />
        </Routes>

    </main>
        <footer>
        <Footer/>
        </footer>
        </CarritoProvider>
        </ProductosProvider>
      </BrowserRouter>
    </>
  )
}

export default App
