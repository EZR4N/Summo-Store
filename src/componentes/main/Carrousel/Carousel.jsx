import React from 'react'
import "./Carousel.scss"
import Carousel from 'react-bootstrap/Carousel';

const CarouselMain = () => {
  return (
    <div className='mainHomeCarousel'>
      <Carousel data-bs-theme="dark"  fade>
        <Carousel.Item>
            <img src="\src\assets\imagenes\image 9.png" alt="" />
        
        </Carousel.Item>

        <Carousel.Item>
            <img src="\src\assets\imagenes\image 9.png" alt="" />
        
        </Carousel.Item>
      </Carousel> 
      
    </div>
  )
}

export default CarouselMain