import { Button, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { cardContext } from '../DataManagmnet/context-provider'
import HouseIcon from '@mui/icons-material/House';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import ShopIcon from '@mui/icons-material/Shop';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LoginIcon from '@mui/icons-material/Login';
const Header = () => {
  const contextData=useContext(cardContext)
  return (
    <div>Header
    <IconButton>
    <LocalGroceryStoreIcon onClick={contextData.showDrawerHandler}></LocalGroceryStoreIcon>
    <div>{contextData.card.length}</div>
    </IconButton>
    <IconButton>
    <Link to='/'><HouseIcon>Home</HouseIcon> </Link>
    </IconButton>
    <IconButton>
    <Link to='/articles'><TextSnippetIcon>Articles</TextSnippetIcon> </Link>
    </IconButton>
    <IconButton>
    <Link to='/aboutus'><Typography variant='h6'>Aboutme</Typography></Link>
    </IconButton>
    <IconButton>
    <Link to='/conenctus'><MailIcon>Contact us</MailIcon></Link>
    </IconButton>
    <IconButton>
    <Link to='/products'><ShopIcon>products</ShopIcon> </Link>
    </IconButton>
    <IconButton>
    <Link to='/loginregistery'><LoginIcon>login</LoginIcon> </Link>
    </IconButton>
    </div>
  )
}

export default Header