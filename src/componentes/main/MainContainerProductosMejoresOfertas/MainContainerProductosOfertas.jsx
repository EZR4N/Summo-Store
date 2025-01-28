import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'
import "./mainContainerProductosOfertas.scss"
import Tarjeta from "../Tarjeta/Tarjeta";
const MainContainerProductosOfertas = ({productos}) => {
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
    <div className='mainContainerProductosOfertasTitulo'>
            <h2>Mejores Ofertas</h2>
    </div>

    <div className='mainContainerProductosOfertas'>
    <div className="slider-container mainContainerProductosOfertasSlider">
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

export default MainContainerProductosOfertas