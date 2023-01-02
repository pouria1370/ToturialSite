import { Box, createTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useEffect, useMemo, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CarouselSection from "./CarouselSection";
import ReccomandationProductCarosuel from "./CarouselItems/ReccomandationProductCarousel";
import { CircularProgress } from "@mui/material";
import ReviewOfCustomers from "./CarouselItems/reviewOfCustomers";
const Footer = () => {
  /**States */
  const [products, setProducts] = useState([]);

  /**Utilities */
  const fillerFuction = useMemo(() => {
    const newArray = [];
    const __newArray = [];
    for (let index = 0; index < 5; index++) {
      for (let __index = 0; __index < 3; __index++) {
        __newArray.push(
          products[index * __index + Math.round(Math.random() * 6)]
        );
        if (__index == 2) {
          newArray.push([...__newArray]);
          __newArray.splice(0, 3);
        }
      }
    }
    return newArray;
  },[products]);
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
          items={[
            [products[0], products[1], products[2]],
            [products[4], products[5], products[6]],
            [products[7], products[8], products[9]],
            [products[10], products[11], products[12]],
            [products[13], products[14], products[15]],
          ]}
          JsxTag={ReccomandationProductCarosuel}
        />
        <CarouselSection
          items={ [[products[0], products[1], products[2]],
            [products[4], products[5], products[6]],
            [products[7], products[8], products[9]],
            [products[10], products[11], products[12]],
            [products[13], products[14], products[15]],] }
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
        }}
      >
        <Box
          sx={{
            width: "30%",
            backgroundColor: `primary`,
            border: `1px solid secondary.main`,
          }}
        >
          <Grid container lg={3} md={6} sm={12}>
            <Grid item>
              <FacebookIcon
                color="primary"
                sx={{ "&:hover": { color: "secondary.main" } }}
              ></FacebookIcon>
            </Grid>
            <Grid item>
              <TwitterIcon
                color="primary"
                sx={{ "&:hover": { color: "secondary.main" } }}
              ></TwitterIcon>
            </Grid>
            <Grid item>
              <PinterestIcon
                color="primary"
                sx={{ "&:hover": { color: "secondary.main" } }}
              ></PinterestIcon>
            </Grid>
            <Grid item>
              <LinkedInIcon
                color="primary"
                sx={{ "&:hover": { color: "secondary.main" } }}
              >
                {" "}
              </LinkedInIcon>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{ width: "70%", backgroundColor: "info.main", height: "500px" }}
        ></Box>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
