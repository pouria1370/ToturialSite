import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { cardContext } from '../DataManagmnet/context-provider'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { OptionUnstyled } from '@mui/base';
import {useNavigate} from 'react-router-dom'
const Product = ({options}) => {
  const contextData=useContext(cardContext)
  const navigate=useNavigate()
 
  const clickHandler=()=>{
   navigate(`${options.id}`,{replace:false})
   console.log("Dd")
  }
  return (
    <Card onClick={clickHandler}>
    <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           {options.thumbnail}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={options.images[0]}
        alt={options.title}
      />
    <CardContent>
    <Typography component='body2'>{options.description}</Typography>
    </CardContent>
    <CardActions>
    <Button onClick={contextData.addOrRemove.bind(null,options)}>{contextData.card.find(current=>current.title===options.title)?"Remove Product":"Add Product"}</Button>
    </CardActions>
    </Card>
  
  )
}

export default Product