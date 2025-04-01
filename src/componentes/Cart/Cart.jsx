import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import  CartItem  from '../CartItem/CartItem'
import './Cart.scss'

const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)
    if (cantidadTotal === 0){
        return(
            <>
            <img className='carritoVacio' src="/assets/imagenes/carritovacio.png" alt="carritovacio" />
            </>
        )
    }
  return (
    <>
      <h2 className='carritoTitulo'> Tu carrito</h2>
        {
          carrito.map((producto) => <CartItem key={producto.item.id} {...producto}/>)
        }

<div className='carritoCard'>

<h3 className='carritoTotal'> Total: ${total} </h3>
<h3 className='carritoCantidadTotal'> Cantidad de productos: { cantidadTotal } </h3>
<div className='carritoCardButtons'>
<Link to="/Checkout">
<button className='carritoFinalizarBtn'>Finalizar compra</button>
</Link>

<button className='carritoVaciarBtn' onClick={vaciarCarrito}>Vaciar carrito</button>
</div>
</div>
    </>
  )
}

export default Cart
