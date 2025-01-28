import React from 'react'
import './CartWidget.scss'
const CartWidget = () => {
  return (
    <div className='headerDivCarrito'>
      <img src="https://www.pikpng.com/pngl/b/464-4646442_carrito-de-compras-carro-de-compras-blanco-clipart.png" alt="Logo Carrito" />
      <ul>
        <li>$0.0</li>
        <li>0 productos</li>
      </ul>
      <img src="\src\assets\imagenes\add-circle-outline.png" alt="icono" />
    </div>
  )
}

export default CartWidget