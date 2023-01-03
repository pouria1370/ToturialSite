import React from "react";
import { Route, Routes } from "react-router-dom";
import CardCarousel from "./components/CarouselItems/CardCarousel";
import TestCard from "./components/Cards/testCard";
import CarouselSection from "./components/CarouselSection";
import Header from "./components/Header";
import ReviewSection from "./components/reviewSection";
import TimelineSection from "./components/timelineSection";
import Aboutme from "./Pages/Aboutme";
import LandingPage from "./Pages/LandingPage";
import Resume from "./Pages/Resume";
import Toturials from "./Pages/Toturials";
import LoginRegistery from "./components/LoginRegistery";
import CardDrawer from "./components/CardDrawer";
import { ContextProvider } from "./DataManagmnet/context-provider";
import ProductsPage from "./Pages/ProductsPage";
import Footer from "./components/Footer";
import UserPanelPage from "./Pages/UserPanelPage";
import SettingUserPanelPage from "./Pages/SettingUserPanelPage";
import HistoryUserPanelPage from "./Pages/HistoryUserPanelPage";
import NewSuggestionUserPanelPage from "./Pages/NewSuggestionUserPanelPage";
import OrderPersuitUserPanelPage from "./Pages/OrderPersuitUserPanelPage";
import ProductPage from "./Pages/ProductPage";
import AboutProduct from "./Pages/AboutProduct";
import Sellers from "./Pages/Sellers";
import ReviewProduct from "./Pages/ReviewProduct";
import ProductDetails from "./Pages/ProductDetails";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
const Data = [
  { name: "pouria", family: "kalantari", id: "jhbjgadjh" },
  { name: "pouria2", family: "kalantari2", id: "jhbjgadjdh" },
  { name: "pouria3", family: "kalantari3", id: "jhbjgadjeeeeeeeeefh" },
];
const Data2 = [
  "Pouria","Parisa","Parsa"
];

const App = () => {
  const myTheme = createTheme({
    palette: {
      primary: {
        main: "#6C00FF",
      },
      secondary: {
        main: "#2DCDDF",
      },
      
    },
    components:{
      MuiSlider:{
        styleOverrides:{
          thumb:{
            color:'#fff'
          }
        }
      },
      MuiButton:{
        styleOverrides:{
          root:({ownerState})=>({
            ...(ownerState.color==="secondary"&&{
              opacity:'0.3',
              fontSize:'2rem'
            })
          })
        },
        variants:[
          {
            props: { color: 'primary' },
            style: {
              textTransform: 'none',
              border: `2px dashed #21f254`,
            },
          },
          {
            props: { variant: 'dashed', color: 'secondary' },
            style: {
              border: `4px dashed red`,
            },
          },
        ],
        
      },
      MuiIconButton:{
        styleOverrides:{
          root:{color:(theme)=>`${theme.palette.primary.main}`},
          '&:hover':{color:'red'}
        }
      }
    },
    typography:{
      h1:{
        fontSize:'1rem',
        fontFamily:"Lucida Sans",
      },
      button:{
        fontSize:'0.6rem',
        fontFamily:'Lucida Sans',
        fontWeight:'400', 
      }
    }
  })

  return (
    <ContextProvider>
    <ThemeProvider theme={myTheme}>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <CarouselSection JsxTag={CardCarousel} items={Data}/>
          <LandingPage/>
          </>}></Route>
        <Route path="/articles" element={<><Toturials /><TimelineSection titlesArray={Data2}/></>}></Route>
        <Route path="/connectUs" element={<><ReviewSection JsxTag={TestCard} URL="https://jsonplaceholder.ir/users"/> <Resume /></>}></Route>
        <Route path="/aboutUs" element={<><Aboutme /> <LoginRegistery/></>}></Route>
        <Route path="/loginregistery" element={<LoginRegistery/>}></Route>
        <Route path="/products" element={<ProductsPage/>}></Route>
        <Route path="/userpanel/*" element={<UserPanelPage/>}>
          <Route path="setting" element={<SettingUserPanelPage/>}/>
          <Route path="history" element={<HistoryUserPanelPage/>}/>
          <Route path="newsuggestion" element={<NewSuggestionUserPanelPage/>}/>
          <Route path="orderpersuit" element={<OrderPersuitUserPanelPage/>}/>
        </Route>
        <Route path="/products/:productID" element={<ProductPage/>}>
           <Route path="aboutproduct" element={<AboutProduct/>}/>
          <Route path="sellers" element={<Sellers/>}/>
          <Route path="review" element={<ReviewProduct/>}/>
          <Route path="product" element={<ProductDetails/>}/>
        </Route>

      </Routes>
      <CardDrawer/>
      <Footer/>
      </ThemeProvider>
    </ContextProvider>
  );
};
export default App;
