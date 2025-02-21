import React from 'react'
import "./MainContainerProductosMasVendidos.scss"
import TarjetaProducto from '../TarjetaProducto/TarjetaProducto'
import { useState, useEffect } from 'react'
import { db } from '../../../services/config'
import { getDocs, collection, query } from 'firebase/firestore'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const MainContainerProductosMasVendidos = () => {

  const  [productos, setProductos] = useState ([])
  
      useEffect( () =>{
        const misProductos = query(collection(db, 'productos'))
        getDocs(misProductos)
          .then(res=>{
            const nuevosProductos = res.docs.map(doc =>{
              const data = doc.data()
              return {id: doc.id, ...data}
            })
            setProductos(nuevosProductos)
          })
          .catch((error) => console.error("error al recibir los productos", error))
      },[])

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
     <div className='mainContainerProductosMasVendidosTitulo'>
            <h2>Mas vendidos</h2>
    </div>

    <div className='mainContainerProductosMasVendidos'>
    <div className="slider-container mainContainerProductosMasVendidosSlider">
      <Slider {...settings}>
        {/* <div>
        <TarjetaProducto className='tarjetaProductosMasVendidos' imagenProducto={productos[0].img} producto={producto[0].nombre} marca={productos[0].marca} precio={productos[0].precio} />
        </div> */}
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