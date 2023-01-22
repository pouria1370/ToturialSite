import React from "react";
import Carousel from "react-material-ui-carousel";

const CarouselSection = ({ items, JsxTag }) => {
  return (
    <Carousel animation="slide" sx={{mt:"10%",mb:'1%'}}>
    {items.map((subItem)=><JsxTag key={subItem} item={subItem}/>)}
    </Carousel>   
  )
}

export default CarouselSection
