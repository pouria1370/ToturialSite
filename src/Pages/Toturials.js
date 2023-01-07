import React from "react";
import {  useNavigate } from "react-router-dom";
import TimelineSection from "../components/timelineSection";


const Toturials = () => {
  const navigate=useNavigate();
  const Data2 = [
    "Pouria","Parisa","Parsa"
  ];
  return (
   <><TimelineSection titlesArray={Data2}/></>
  );
};

export default Toturials;
