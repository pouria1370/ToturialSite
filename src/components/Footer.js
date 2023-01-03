import { Box, createTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CarouselSection from "./CarouselSection";
import ReccomandationProductCarosuel from "./CarouselItems/ReccomandationProductCarousel";
import { CircularProgress } from "@mui/material";
import ReviewOfCustomers from "./CarouselItems/reviewOfCustomers";
import { blue, green, pink, red, yellow } from "@mui/material/colors";
const Footer = () => {
  /**States */
  const [products, setProducts] = useState([]);

  /**Utilities */
  const fillerFuction = useCallback(() => {
    const newArray = [];
    const __newArray = [];
    for (let index = 0; index < 5; index++) {
      for (let __index = 0; __index < 3; __index++) {
        __newArray.push(
          products[index * __index + 2]
        );
        if (__index == 2) {
          newArray.push([...__newArray]);
          __newArray.splice(0, 3);
        }
      }
    }
    return newArray;
  },[products]);

  const arrayData= fillerFuction()
  useEffect(() => {
    (async function fetchingData() {
      const result = await fetch(`https://dummyjson.com/products`);
      const data = await result.json();
      setProducts(data.products);console.log(data)
    })();
  }, []);

  return (
    <React.Fragment>
      {products.length ? (
        <>
        <CarouselSection
          items={[...arrayData
          ]}
          JsxTag={ReccomandationProductCarosuel}
        />
        <CarouselSection
          items={ [...arrayData] }
          JsxTag={ReviewOfCustomers}
        />
        </>
      ) : (
        <CircularProgress />
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          top: window.innerHeight * 1 - 500 + "px",
          background:'linear-gradient(to right,#F2DEBA,transparent)' 
        }}
      >
        <Box
          sx={{
            width: "30%",
            backgroundColor: `primary`,
            border: `1px solid secondary.main`,
            
          }}
          display="grid"
            gridTemplateColumns="repeat(12,1fr)"
            gap={1}
            
        >
          <Box sx={{backgroundColor:blue[200],height:'200px'}} gridColumn="span 4"></Box>
          <Box sx={{backgroundColor:green[200],height:'200px'}} gridColumn="span 8"></Box>
          <Box  sx={{backgroundColor:red[200],height:'200px'}} gridColumn="span 12"></Box>
          <Grid container gridColumn="span 12" pl="5%" >
            <Grid item lg={3} md={6} sm={12}>
              <FacebookIcon
                color="primary"
                sx={{"&:hover": { color: "secondary.main" } }}
              ></FacebookIcon>
            </Grid>
            <Grid item lg={3} md={6} sm={12}>
              <TwitterIcon
                color="primary"
                sx={{"&:hover": { color: "secondary.main" } }}
              ></TwitterIcon>
            </Grid>
            <Grid item lg={3} md={6} sm={12}>
              <PinterestIcon
                color="primary"
                sx={{"&:hover": { color: "secondary.main" } }}
              ></PinterestIcon>
            </Grid>
            <Grid item lg={3} md={6} sm={12}>
              <LinkedInIcon
                color="primary"
                sx={{"&:hover": { color: "secondary.main" } }}
              >
                {" "}
              </LinkedInIcon>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{ width: "70%",  height: "500px" }}
          display='grid'
          gridTemplateColumns='repeat(12,1fr)'
          gap={1}
          pl="5%"
        >
<Box gridColumn="span 4" height='100px' sx={{backgroundColor:red[100]}}></Box>
<Box gridColumn="span 8" height='100px' sx={{backgroundColor:green[100]}}></Box>
<Box gridColumn="span 12" height='100px' sx={{backgroundColor:blue[100]}}></Box>
<Box gridColumn="span 6" height='100px' sx={{backgroundColor:pink[100]}}></Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
