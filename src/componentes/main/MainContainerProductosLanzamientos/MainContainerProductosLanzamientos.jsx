import React, { useContext } from 'react'
import "./MainContainerProductosLanzamientos.scss"
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProductosContext } from '../../../context/ProductosContext'
const MainContainerProductosLanzamientos = () => {
  const { productos, loading } = useContext(ProductosContext)
  let productosFiltrados = productos.filter(producto => producto.lanzamiento===true)

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
      {loading && <div> Cargando productos... </div>}
      <Slider {...settings}>
      {productosFiltrados.map((producto) => (
          <TarjetaProducto key={producto.id} className="tarjetaProductosOfertas" producto={producto}/> 
        ))}
      </Slider>
    </div>
    </div>


    

    </>
  )
}

export default MainContainerProductosLanzamientos
