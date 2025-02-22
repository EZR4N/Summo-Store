import React, { useContext } from 'react'
import { Link, NavLink} from 'react-router-dom'
import './CartWidget.scss'
import { CarritoContext } from '../../../context/CarritoContext'

const CartWidget = () => {
  const {cantidadTotal, total} = useContext(CarritoContext)
  
  return (
    <div className='headerDivCarrito'>
      <Link to="/carrito">
      <img src="https://www.pikpng.com/pngl/b/464-4646442_carrito-de-compras-carro-de-compras-blanco-clipart.png" alt="Logo Carrito" />
      </Link>
      <ul>
        <NavLink to="/carrito">
        <li>${total}</li>
        </NavLink>
        <NavLink to="/carrito">
        <li>
          {
          cantidadTotal
          } productos</li>
        </NavLink>
      </ul>
      <Link to="/carrito">
      <img src="/assets/imagenes/add-circle-outline.png" alt="icono" />
      </Link>
    </div>
  )
}

export default CartWidget
