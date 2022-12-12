import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
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
      <Typography variant="h5" component="div">
       {options.price}
      </Typography>
      <Stack direction='horizontal'>
      <IconButton onClick={contextData.reduceCard.bind(null,options)}><ArrowLeftIcon/></IconButton>
      <Typography variant='body2'>{contextData.giveNumberOfProduct.call(null,options)}</Typography>
      <IconButton onClick={contextData.riseCard.bind(null,options)}><ArrowRightIcon/></IconButton>
      </Stack>
    </CardContent>
    <CardActions>
      <IconButton onClick={contextData.removeCard.bind(null,options)}>
      <ClearIcon sx={{color:'red'}} />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default WishListCard