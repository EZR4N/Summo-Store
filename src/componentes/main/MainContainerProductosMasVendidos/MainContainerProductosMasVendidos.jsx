import React, { useContext, useState, useEffect } from 'react'
import "./MainContainerProductosMasVendidos.scss"
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProductosContext } from '../../../context/ProductosContext';
import MoonLoader from 'react-spinners/MoonLoader';

const MainContainerProductosMasVendidos = () => {
    const { productos, loading} = useContext(ProductosContext)
    const [cantidadCards, setCantidadCards] = useState(4.15)
      const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 1024px)").matches);
    
      useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        setIsMobile(mediaQuery.matches);
    
        const handleResize = () => setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener("change", handleResize);
    
        return () => mediaQuery.removeEventListener("change", handleResize);
      }, []);
    
      useEffect(() => {
        setCantidadCards(isMobile ? 2.15 : 4.15);
      }, [isMobile])
    

    const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: cantidadCards,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <>
     <div className='mainContainerProductosMasVendidosTitulo'>
            <h2>Mas vendidos</h2>
    </div>

    <div className='mainContainerProductosMasVendidos'>
    <div className="slider-container mainContainerProductosMasVendidosSlider">
      {loading && <div className='sliderSpinner'> 
        <MoonLoader color="#F88A1B" size={50}/> </div>}
      <Slider {...settings}>
        {productos.map((producto) => (
          <TarjetaProducto key={producto.id} className="tarjetaProductosOfertas" producto={producto}/> 
        ))}
      </Slider>
    </div>
    
    </div>

    
    </>
  )
}

export default MainContainerProductosMasVendidos
