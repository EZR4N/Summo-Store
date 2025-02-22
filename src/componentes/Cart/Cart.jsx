import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import  CartItem  from '../CartItem/CartItem'


const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)
    if (cantidadTotal === 0){
        return(
            <>
            <h2>Tu carrito esta vacío</h2>
            <Link to="/"> Volver al home</Link>
            </>
        )
    }
  return (
    <>
      <h2>Carrito</h2>
        {
          carrito.map((producto) => <CartItem key={producto.item.id} {...producto}/>)
        }

<h3> Total: $ {total} </h3>
<h3> Cantidad Total: { cantidadTotal } </h3>
<Link to="/Checkout">
<button>Finalizar compra</button>
</Link>

<button onClick={vaciarCarrito}>Vaciar carrito</button>
    </>
  )
}

export default Cart
