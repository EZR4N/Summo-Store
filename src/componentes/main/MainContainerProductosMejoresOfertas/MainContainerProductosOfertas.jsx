import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'
import "./mainContainerProductosOfertas.scss"
import { useContext } from "react";
import { ProductosContext } from "../../../context/ProductosContext";

const MainContainerProductosOfertas = () => {
  const { productos, loading } = useContext(ProductosContext)
  let productosConDescuento = productos.filter(producto => producto.descuento>0)
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
      {loading && <div> Cargando productos... </div>}
      <Slider {...settings}>

        {productosConDescuento.map((producto) => (
          <TarjetaProducto key={producto.id} className="tarjetaProductosOfertas"producto={producto}/> 
        ))}
        
      
        
      </Slider>
    </div>
    </div>
    </>

  )
}

export default MainContainerProductosOfertas
