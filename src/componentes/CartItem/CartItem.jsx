import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import '../CartItem/CartItem.scss'

const CartItem = ({item, cantidad}) => {
  const { eliminarProducto } = useContext(CarritoContext)
  
  return (
    <div className='cartItemContainer'>
        <h2 className='cartItemNombre'>{item.nombre}</h2>
        <h2 className='cartItemCantidad'>{cantidad}</h2>
        <h2 className='cartItemPrecio'> Precio: {item.precio}</h2>
        <button className='cartItemBtnEliminarProducto' onClick={() => eliminarProducto(item.id)}> Eliminar producto </button>
        
    </div>
  )
}

export default CartItem