import { Container, Paper } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const CarouselSection = ({ items, JsxTag }) => {
  return (
    <Carousel>
    {items.map((item)=><JsxTag item={item}/>)}
    </Carousel>   
  )
}

export default CarouselSection
