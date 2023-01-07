import {  Box} from "@mui/material";
import React from "react";
import "./landingPage.css";
const LandingPage = () => {
 
  return (
  <>
  <Box display='grid' gridTemplateColumns='repeat(8,1fr)' gap={2}  mt="20px">
<Box gridColumn="span 4" sx={{height:'300px',backgroundColor:"warning.main"}}></Box>
<Box gridColumn="span 4" sx={{height:'300px',backgroundColor:"primary.main"}}></Box>
<Box gridColumn="span 4" sx={{height:'300px',backgroundColor:"secondary.main"}}></Box>
<Box gridColumn="span 4" sx={{height:'300px',backgroundColor:"info.main"}}></Box>
<Box gridColumn="span 8" sx={{height:'100px',background:"#FF0032"}}></Box>
<Box gridColumn="span 2" sx={{height:'100px',background:"#FF78F0"}}></Box>
<Box gridColumn="span 2" sx={{height:'100px',background:"#939B62"}}></Box>
<Box gridColumn="span 2" sx={{height:'100px',background:"#FF78F0"}}></Box>
<Box gridColumn="span 2" sx={{height:'100px',background:"#6C00FF"}}></Box>

  </Box>
  </>
  );
};

export default LandingPage;
