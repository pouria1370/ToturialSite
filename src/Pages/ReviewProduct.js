import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../components/Cards/ReviewCard";
import './ReviewProduct.css'
const ReviewProduct = () => {
  const { productID } = useParams();
  const [productInfo, setProductInfo] = useState();

  useEffect(() => {
    (async function fetchingData() {
      const result = await fetch(`https://dummyjson.com/comments/${productID}`);
      const data = await result.json();
      setProductInfo(data);
    })();
  }, [productID]);
  return !productInfo ? (
        <CircularProgress/>
      ) : (<div className="ReviewProduct-container">
    <ReviewCard productInfo={productInfo} />
    <ReviewCard productInfo={productInfo} />
    <ReviewCard productInfo={productInfo} />
    </div>
  );
};

export default ReviewProduct;
