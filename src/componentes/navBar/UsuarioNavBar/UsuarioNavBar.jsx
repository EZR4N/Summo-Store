import React from 'react'
import './usuarioNavBar.scss'
const UsuarioNavBar = () => {
  return (
    <>
    
    <ul className='ulUsuario'>
        <li><img src="/assets/imagenes/user_icon_149851.webp" className="headerIconoUsuario" alt="icono usuario" /></li>
        <li>Ingresar</li>
        <li className='liRegistrarme'>Registrarse</li>
    </ul>
    </>
  )
}

export default UsuarioNavBar
