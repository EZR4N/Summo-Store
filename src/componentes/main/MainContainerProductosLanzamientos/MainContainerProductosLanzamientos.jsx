import React from 'react'
import "./MainContainerProductosLanzamientos.scss"
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const MainContainerProductosLanzamientos = ({productos}) => {

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4.15,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <>
    <div className='mainContainerProductosLanzamientosTitulo'>
            <h2>Lanzamientos</h2>
    </div>

    <div className='mainContainerProductosLanzamientos'>
    <div className="slider-container mainContainerProductosLanzamientosSlider">
      <Slider {...settings}>
      {productos.map((producto) => (
          <TarjetaProducto key={producto.id} className="tarjetaProductosOfertas" idProducto={producto.id} imagenProducto={producto.img} producto={producto.nombre} marca={producto.marca} precio={producto.precio} stock={producto.stock}/> 
        ))}
      </Slider>
    </div>
    </div>


    

    </>
  )
}

export default MainContainerProductosLanzamientos