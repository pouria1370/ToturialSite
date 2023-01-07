import { Box, Button, createTheme, IconButton, ThemeProvider, Typography } from "@mui/material";
import React, { useContext } from "react";
import { cardContext } from "../DataManagmnet/context-provider";
import HouseIcon from "@mui/icons-material/House";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import ShopIcon from "@mui/icons-material/Shop";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LoginIcon from "@mui/icons-material/Login";
import { blue, red } from "@mui/material/colors";
import "./Header.css";
const Header = () => {
  const contextData = useContext(cardContext);
  const myTheme=createTheme({
    components:{ 
      MuiIconButton:{
        styleOverrides:{
          root:{
            borderRadius:'0px',
            '&:hover':{
              borderBottom:'6px solid red',
              transition:'all ease-out 0.1s'
            }
            
          }
        }
      }
    }
  })
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
          background:'#1A0000',
          height: "100px",
          display: "flex",
          flexDirection: "row",
          p:'10px 5px'
        }}
      >
        <Box sx={{ display: "flex", justifySelf: "flex-start", flexGrow: "1" }}>
          <IconButton>
            <LocalGroceryStoreIcon
              sx={{
                ml: "10px",
                mr: "10px",
                color: "white",
                fontSize: "25px",    
                zIndex:100  ,     
                '&:hover':{
                  color:"secondary.main"
                }
              }}
              onClick={contextData.showDrawerHandler}
            ></LocalGroceryStoreIcon>
            {contextData.card.length == 0 ? null : (
              <div className="wishlist__count__number">
                {contextData.card.length}
              </div>
            )}
          </IconButton>
          <IconButton>
            <Link to="/loginregistery">
              <LoginIcon
                sx={{
                  ml: "10px",
                  mr: "10px",
                  color: "white",
                  fontStyle: "none",
                  fontSize: "25px",
                  '&:hover':{
                    color:"secondary.main"
                  }
                }}
              >
                login
              </LoginIcon>{" "}
            </Link>
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", justifySelf: "flex-end" }}>
          <IconButton>
            <Link to="/">
              <HouseIcon
                sx={{
                  ml: "10px",
                  mr: "10px",
                  color: "white",
                  fontStyle: "none",
                  fontSize: "30px",
                  '&:hover':{
                    color:"secondary.main"
                  }
                }}
              />
          
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/articles">
              <TextSnippetIcon
                sx={{
                  ml: "10px",
                  mr: "10px",
                  color: "white",
                  fontStyle: "none",
                  fontSize: "25px",
                  '&:hover':{
                    color:"secondary.main"
                  }
                }}
              >
                Articles
              </TextSnippetIcon>{" "}
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/aboutus">
              <Typography
                variant="h6"
                sx={{
                  ml: "10px",
                  mr: "10px",
                  color: "white",
                  fontStyle: "none",
                  fontSize: "20px",
                  '&:hover':{
                    color:"secondary.main"
                  }
                }}
              >
                Aboutme
              </Typography>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/contactus">
              <MailIcon
                sx={{
                  ml: "10px",
                  mr: "10px",
                  color: "white",
                  fontStyle: "none",
                  fontSize: "25px",
                  '&:hover':{
                    color:"secondary.main"
                  }
                }}
              >
                Contact us
              </MailIcon>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/products">
              <ShopIcon
                sx={{
                  ml: "10px",
                  mr: "10px",
                  color: "white",
                  fontStyle: "none",
                  fontSize: "30px",
                  '&:hover':{
                    color:"secondary.main"
                  }
                }}
              >
                products
              </ShopIcon>{" "}
            </Link>
          </IconButton>
        </Box>
      </Box>
      </ThemeProvider>
    </>
  );
};

export default Header;
