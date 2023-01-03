import { Button, CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PicturesCarousel from "../components/CarouselItems/PicturesCarousel";
import CarouselSection from "../components/CarouselSection";
import Wrapper from "../components/Wrapper";
import "./ProductPage.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './ProductPage.css'
const ProductPage = () => {
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
  return(
    <Wrapper >
      <div className="productPage-mainInfo">
        <div className="carouselPictures">
          {!productInfo ? (
            <CircularProgress />
          ) : (
            <CarouselSection
              items={[...productInfo.images]}
              JsxTag={PicturesCarousel}
            />
          )}
        </div>
        <div className="mainInfo">
          <div>
            <ul className="columnNavigator">
              <li>
                <Button>
                  <Link to="aboutproduct">About Product</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="sellers">Sellers</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="review">Review</Link>
                </Button>
              </li>
              <li>
                <Button>
                  <Link to="product">Product</Link>
                </Button>
              </li>
            </ul>
          </div>
          <div className="priceAndPopularity">
            <div className="productTitle">{!productInfo ? <CircularProgress /> : productInfo.title}</div>
            <div className="productPrice">{!productInfo ? <CircularProgress /> : productInfo.price}$</div>
            <div className="productRating">
              {!productInfo ? <CircularProgress /> :<Rating   
                value={ productInfo.rating}
                readOnly
                precision={0.5}
              />}
            </div>
          </div>
        </div>
      </div>
      <div className="productPage-subPages">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default ProductPage;
