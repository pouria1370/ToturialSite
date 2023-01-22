import {
  Box,
  Button,
  createTheme,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { cardContext } from "../DataManagmnet/context-provider";
import HouseIcon from "@mui/icons-material/House";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import MailIcon from "@mui/icons-material/Mail";
import { Link, useNavigate } from "react-router-dom";
import ShopIcon from "@mui/icons-material/Shop";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LoginIcon from "@mui/icons-material/Login";
import { blue, red } from "@mui/material/colors";
import "./Header.css";
const Header = () => {
  const contextData = useContext(cardContext);
  const navigate=useNavigate()
  const myTheme = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            borderRadius: "0px",
            "&:hover": {
              borderBottom: "6px solid red",
              transition: "all ease-out 0.1s",
            },
          },
        },
      },
    },
  });

const navigateHandler=(route)=>{
navigate(`/${route}`)
}




  return (
    <>
      <Box sx={{ backgroundColor: blue[200], height: "300px" }}>
        <Typography variant="h1" sx={{ fontFamily: "vazir", fontSize: "60px" }}>
          Advertisment
        </Typography>
      </Box>
      <ThemeProvider theme={myTheme}>
        <Box
          sx={{
            background: "#1A0000",
            height: "100px",
            display: "flex",
            flexDirection: "row",
            p: "10px 5px",
          }}
        >
          <Box
            sx={{ display: "flex", justifySelf: "flex-start", flexGrow: "1" }}
          >
            <IconButton onClick={contextData.showDrawerHandler}>
              <LocalGroceryStoreIcon
                sx={{
                  ml: "10px",
                  mr: "10px",
                  color: "white",
                  fontSize: "25px",
                  zIndex: 100,
                 
                }}
              ></LocalGroceryStoreIcon>
              {contextData.card.length == 0 ? null : (
                <div className="wishlist__count__number">
                  {contextData.card.length}
                </div>
              )}
            </IconButton>
              <IconButton onClick={navigateHandler.bind(this,"loginregistery")}>
                <LoginIcon
                  sx={{
                    ml: "10px",
                    mr: "10px",
                    color: "white",
                    fontStyle: "none",
                    fontSize: "25px",
                    
                  }}
                >
                  login
                </LoginIcon>{" "}
              </IconButton>
           
          </Box>
          <Box sx={{ display: "flex", justifySelf: "flex-end" }}>
           
              <IconButton onClick={navigateHandler.bind(this,"")}>
                <HouseIcon
                  sx={{
                    ml: "10px",
                    mr: "10px",
                    color: "white",
                    fontStyle: "none",
                    fontSize: "30px",
                    
                  }}
                />
              </IconButton>
        
            
              <IconButton onClick={navigateHandler.bind(this,"articles")}>
                <TextSnippetIcon
                  sx={{
                    ml: "10px",
                    mr: "10px",
                    color: "white",
                    fontStyle: "none",
                    fontSize: "25px",
                    
                  }}
                >
                  Articles
                </TextSnippetIcon>{" "}
              </IconButton>
           
          
              <IconButton onClick={navigateHandler.bind(this,"aboutus")}>
                <Typography
                  variant="h6"
                  sx={{
                    ml: "10px",
                    mr: "10px",
                    color: "white",
                    fontStyle: "none",
                    fontSize: "20px",
                    
                  }}
                >
                  Aboutme
                </Typography>
              </IconButton>
          
    
              <IconButton onClick={navigateHandler.bind(this,"contactus")}>
                <MailIcon
                  sx={{
                    ml: "10px",
                    mr: "10px",
                    color: "white",
                    fontStyle: "none",
                    fontSize: "25px",
                    
                  }}
                >
                  Contact us
                </MailIcon>
              </IconButton>
      

              <IconButton onClick={navigateHandler.bind(this,"products")} >
                <ShopIcon
                  sx={{
                    ml: "10px",
                    mr: "10px",
                    color: "white",
                    fontStyle: "none",
                    fontSize: "30px",
                    
                  }}
                >
                  products
                </ShopIcon>{" "}
              </IconButton>
         
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Header;
