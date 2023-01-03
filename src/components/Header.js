import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { cardContext } from '../DataManagmnet/context-provider'
import HouseIcon from '@mui/icons-material/House';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import ShopIcon from '@mui/icons-material/Shop';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LoginIcon from '@mui/icons-material/Login';
import { blue, red } from '@mui/material/colors';
import './Header.css'
const Header = () => {
  const contextData=useContext(cardContext)
  return (
    <>
    <Box sx={{backgroundColor:blue[200],height:'300px'}}><Typography variant='h1' sx={{fontFamily:'vazir',fontSize:'60px'}}>Advertisment</Typography></Box>
    <Box sx={{backgroundColor:red[200],height:'100px',display:'flex',flexDirection:"row"}}>
    <Box sx={{display:'flex',justifySelf:'flex-start',flexGrow:'1'}}>
    <IconButton sx={{position:"relative"}}>
    <LocalGroceryStoreIcon sx={{ml:'10px',mr:'10px',color:"primary.main", fontStyle:"none",fontSize:"25px"}} onClick={contextData.showDrawerHandler}></LocalGroceryStoreIcon>
    {contextData.card.length==0?null:<div className="wishlist__count__number">{contextData.card.length}</div>}
    </IconButton>
    <IconButton >
    <Link to='/loginregistery'><LoginIcon sx={{ml:'10px',mr:'10px',color:"primary.main", fontStyle:"none",fontSize:"25px"}}>login</LoginIcon> </Link>
    </IconButton>

    </Box>
  <Box sx={{display:'flex',justifySelf:'flex-end'}}>

  <IconButton>
    <Link   to='/'><HouseIcon sx={{ml:'10px',mr:'10px',color:"primary.main", fontStyle:"none",fontSize:"30px"}}>Home</HouseIcon> </Link>
    </IconButton>
    <IconButton>
    <Link to='/articles'><TextSnippetIcon sx={{ml:'10px',mr:'10px',color:"primary.main", fontStyle:"none",fontSize:"25px"}}>Articles</TextSnippetIcon> </Link>
    </IconButton>
    <IconButton>
    <Link to='/aboutus'><Typography variant='h6' sx={{ml:'10px',mr:'10px',color:"primary.main", fontStyle:"none",fontSize:"20px"}}>Aboutme</Typography></Link>
    </IconButton>
    <IconButton>
    <Link to='/conenctus'><MailIcon sx={{ml:'10px',mr:'10px',color:"primary.main", fontStyle:"none",fontSize:"25px"}}>Contact us</MailIcon></Link>
    </IconButton>
    <IconButton>
    <Link to='/products'><ShopIcon sx={{ml:'10px',mr:'10px',color:"primary.main", fontStyle:"none",fontSize:"30px"}}>products</ShopIcon> </Link>
    </IconButton>

  </Box>
    
    </Box>
    </>
  )
}

export default Header