import {
  Box,
  Checkbox,
  CircularProgress,
  Collapse,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Pagination,
  Slider,
  styled,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import React, { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Product from "../components/Product";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const ProductsPage = () => {

  /**Variables */
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [page, setPage] = useState(1);
  const [topScrolled,setTopScrolled]=useState('100px')

  /**Utilities */
  const getUnduplicateCategories = () => {
    const firstArray = products.map((item) => item.category);
    let unduplicatedCategories = firstArray.filter(
      (item, index) => firstArray.indexOf(item) === index
    );  
    return unduplicatedCategories;
    }

  const getSortedBrands = (products) => {
    const firstArray = products.map((item) => item.brand);
    const filteredFirstArray = firstArray.filter(
      (item, index) => firstArray.indexOf(item) === index
    );
    const transformedArray = filteredFirstArray.map((item) =>
      item.toLowerCase()
    );
    let sortedBrands = [...transformedArray.sort((a, b) => (a > b ? 1 : -1))];
    return sortedBrands;
  };

  /**variables */
  let data_1 = useMemo(()=>getUnduplicateCategories(products),[products]);
  let data_2 = useMemo(getSortedBrands(products),[products]);
  let unduplicatedCategories = data_1 ? data_1 : [];
  let sortedBrands = data_2 ? data_2 : [];

  /**Handlers */
  const clickHandler__brand = () => {
    setOpen((prevState) => !prevState);
  };
  const clickHandler__category = () => {
    setOpenCategory((prevState) => !prevState);
  };
  const clickHandler__price = () => {
    setOpenPrice((prevState) => !prevState);
  };

  const changePageHandler = (event, value) => {
    setPage(value);
  };
  const getValue = (value) => {
    return `${value}$`;
  };
  const changeTop=()=>{
console.log('eee')
  }

  /** UseEffects and SideEffects */
  useEffect(() => {
    (async function () {
      const responce = await fetch("https://dummyjson.com/products");
      const Data3 = await responce.json();
      setProducts(Data3.products);

    })();
  },[]);

  useEffect(()=>{
    const handle=()=>{
      if(window.scrollY>=400)
      setTopScrolled('0px')
      else if(window.scrollY<400)
      setTopScrolled('400px')
    }
  window.addEventListener('scroll',handle)
  return(()=>{
    window.removeEventListener('scroll',handle)
   

  })
  },[page])


  return (
    <Box
      sx={{ flexGrow: 1 }}
      display="grid"
      gridTemplateColumns="repeat(12,1fr)"
      gap={2}
      columnGap={1}
    >
      <Box gridColumn="span 2">
        <List
          style={{ width: "15%", backgroundColor: red[100], position: "fixed",top:topScrolled}}
      
          subheader={
            <ListSubheader
              sx={{ color: "gray", fontFamily: "iransanse" }}
              component="div"
            >
              فیلتر ها
            </ListSubheader>
          }
        >
          <ListItemButton onClick={clickHandler__brand}>
            <ListItemText primary="Brands" />
            <ListItemIcon>
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemIcon>
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List
              component="div"
              disablePadding
              sx={{ overflowY: "auto", height: "150px" }}
            >
              {sortedBrands.length != 0 ? (
                sortedBrands.map((__item, __index) => (
                  <>
                    {__index == 0 ||
                    __item.charAt(0) !== sortedBrands[__index - 1].charAt(0) ? (
                      <h1>{__item.charAt(0).toUpperCase()}</h1>
                    ) : null}
                    <FormControlLabel key={__item} control={<Checkbox />} label={__item} />
                  </>
                ))
              ) : (
                <h1>please wait</h1>
              )}
            </List>
          </Collapse>
          <ListItemButton onClick={clickHandler__category}>
            <ListItemText primary="category" />
            <ListItemIcon>
              {openCategory ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemIcon>
          </ListItemButton>
          <Collapse in={openCategory} timeout="auto" unmountOnExit>
            <List component="div" sx={{ overflowY: "auto", height: "100px" }}>
              {unduplicatedCategories.length != 0 ? (
                unduplicatedCategories.map((__item, __index) => (
                  <FormControlLabel key={__item} control={<Checkbox />} label={__item} />
                ))
              ) : (
                <h1>please wait</h1>
              )}
            </List>
          </Collapse>
          <ListItemButton onClick={clickHandler__price}>
            <ListItemText primary="Price_Range" />
            <ListItemIcon>
              {openPrice ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemIcon>
          </ListItemButton>
          <Collapse in={openPrice} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {
                <Slider
                  sx={{ ml: "5%", width: "80%" }}
                  getAriaValueText={getValue}
                  size="small"
                  aria-label="Restricted values"
                  min={0}
                  max={2000}
                  valueLabelDisplay="auto"
                  defaultValue={30}
                />
              }
            </List>
          </Collapse>
        </List>
      </Box>
      <Grid container gridColumn="span 8">
        {products.length !== 0 ? (
          products
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((singleProduct) => (
              <Grid
                key={singleProduct.id}
                md={6}
                lg={6}
                xl={4}
                sm={12}
                xs={12}
                item
              >
                <Product options={singleProduct} />
              </Grid>
            ))
        ) : (
          <CircularProgress
            sx={{
              margin: "auto auto",
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          />
        )}
        <Grid item justifySelf="center">
          <Pagination
            sx={{ mt: "30%" }}
            page={page}
            onChange={changePageHandler}
            count={products.length / 10}
            color="secondary"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
