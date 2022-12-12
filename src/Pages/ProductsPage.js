import { Box, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async function () {
      const responce = await fetch("https://dummyjson.com/products");
      const Data3 = await responce.json();
      setProducts(Data3.products);
    })();
    console.log("iam productPage rerendered")
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      {products.length!==0?
        products.map((singleProduct) => (
          <Grid key={singleProduct.id} md={4} lg={3} sm={6} xs={12} item >
          <Product options={singleProduct} />
          </Grid>
        ))
      :<CircularProgress sx={{margin:"auto auto",position:'absolute',top:"50%",left:'50%'}}/>
      }
      </Grid>
    </Box>
  );
};

export default ProductsPage;
