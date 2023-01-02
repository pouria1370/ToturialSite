import { Container, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const CarouselSection = ({ items, JsxTag }) => {
  return (
    <Carousel animation="slide" sx={{mt:"10%",mb:'10%'}}>
    {items.map((subItem)=><JsxTag item={subItem}/>)}
    </Carousel>   
  )
}

export default CarouselSection
