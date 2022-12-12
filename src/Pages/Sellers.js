import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SellerCard from "../components/Cards/SellerCard";
import './Sellers.css'
const Sellers = () => {
  const { productID } = useParams();
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    (async function fetchingData() {
      const result = await fetch(`https://dummyjson.com/products/${productID}`);
      const data = await result.json();
      console.log(data);
      setProductInfo(data);
    })();
  }, [productID]);
  return !productInfo ? (
    <CircularProgress />
  ) : (
    <div className="Sellers-Container">
      <SellerCard productInfo={productInfo} />
      <SellerCard productInfo={productInfo} />
      <SellerCard productInfo={productInfo} />
    </div>
  );
};

export default Sellers;
