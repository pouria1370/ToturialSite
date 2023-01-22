import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useContext } from 'react'
import {  cardContext} from '../../DataManagmnet/context-provider'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ClearIcon from '@mui/icons-material/Clear';
import { red } from '@mui/material/colors';
const WishListCard = ({options}) => {
    const contextData=useContext(cardContext);
   
  return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent>
    <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        {options.image}
      </Avatar>
    }/>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       {options.title}
      </Typography>
      <CardMedia
        component="img"
        height="50"
        image={options.images[0]}
        alt={options.title}
      />
      
      <Stack direction='horizontal' justifyContent="start">
      <Typography variant="h5" component="div">
       {options.price}
      </Typography>
      <IconButton onClick={contextData.reduceCard.bind(null,options)}><ArrowLeftIcon/></IconButton>
      <Typography  sx={{position:"relative", top:"9px"}} variant='body2'>{contextData.giveNumberOfProduct.call(null,options)}</Typography>
      <IconButton onClick={contextData.riseCard.bind(null,options)}><ArrowRightIcon/></IconButton>
      <IconButton  onClick={contextData.removeCard.bind(null,options)}>
      <ClearIcon  sx={{color:'red'}} />
      </IconButton>
      </Stack>
    </CardContent>
    
  </Card>
  )
}

export default WishListCard