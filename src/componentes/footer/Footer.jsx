import React from 'react'
import "./Footer.scss"
import {Link} from "react-router-dom"


const Footer = () => {
    const volverAlPrincipio = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <>
    <div onClick={volverAlPrincipio} className='footerBotonVolverAlPrincipio'>
            <img src="/assets/imagenes/arrow-up.png" alt="icono flecha volver" />
            <h3>Ir al principio</h3>
    </div>
      <div className='footerContainer'>
        <div className='footerLogoContainer'>
            <Link to={"/"}>
                <img className='footerLogo' src="/assets/imagenes/Screenshot_10.png" alt="Summo logo" />
            </Link>
        </div>
        <div className='footerLinks1'>
            <ul className='footerLinks1Ul'>
                <li className='footerLiDecorado'>Summo Distribuidora</li>
                <li>Primer ingreso</li>
                <li>Preguntas frecuentes</li>
                <li>Términos y condiciones</li>
                <li>Política de privacidad</li>
                <li>Quienes somos</li>
                <li>Sumá tu marca a Summo Store</li>
            </ul>
        </div>
        <div className='footerLinks2'>
            <ul className='footerLinks2Ul'>
                <li className='footerLiDecorado'>Contáctanos</li>
                <li>
                    <div className='footerLinks2Container'>
                        <img className='footerLinks2Icono' src="/assets/imagenes/call-outline.png" alt="icono de telefono" />
                        <p>+54 11 xxxx-xxxx</p>
                    </div>
                </li>
                <li>
                    <div className='footerLinks2Container'>
                        <img className='footerLinks2Icono' src="/assets/imagenes/call-outline.png" alt="icono de telefono" />
                        <p>+54 11 xxxx-xxxx</p>
                    </div>
                </li>
                <li>
                    <div className='footerLinks2Container'>
                        <img className='footerLinks2Icono' src="/assets/imagenes/mail-outline.png" alt="icono de email" />
                        <p>ezeore2@gmail.com</p>
                    </div>
                </li>
            </ul>
        </div>
        <div className='footerRedesSociales'>
             <ul className='footerRedesSocialesUl'>
                <li className='footerLiDecorado'>Redes Sociales</li>
                <li>
                    <div className='footerRedesSocialesIconosContainer'>
                        <img src="/assets/imagenes/logo-facebook.png" alt="logo facebook" />
                        <img src="/assets/imagenes/logo-instagram.png" alt="logo instagram" />
                        <img src="/assets/imagenes/logo-linkedin.png" alt="logo linkedin" />
                    </div>
                </li>
             </ul>
        </div>
    </div>

    <div className='footerCopyright'>
        <h3>
            Copyright @ Buenaimpresión2025
        </h3>
    </div>
</>
  )
}

export default Footer
