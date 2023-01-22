import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { cardContext } from '../DataManagmnet/context-provider'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import {useNavigate} from 'react-router-dom'
const Product = ({options}) => {
  const contextData=useContext(cardContext)
  const navigate=useNavigate()
 
  const clickHandler=()=>{
   navigate(`${options.id}`,{replace:false})
  }
  return (
    <Card sx={{m:" 5px 8px",boxShadow:"1px 2px 2px 2px #ada7a6 "}}>
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
        onClick={clickHandler}
      />
    <CardContent sx={{p:'2px'}}>
    <Typography component='body2' noWrap>{options.description}</Typography>
    </CardContent>
    <CardActions>
    <Button onClick={contextData.addOrRemove.bind(null,options)}>{contextData.card.find(current=>current.title===options.title)?"Remove Product":"Add Product"}</Button>
    </CardActions>
    </Card>
  
  )
}

export default Product