import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

const TestCard = ({options}) => {
    return (
        <Card sx={{ minWidth: 275,maxHeight:275 }}>
        <CardContent>
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <img src={`${options.avatar}`}/>
          </Avatar>
        }/>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           {options.name}
          </Typography>
          <Typography variant="h5" component="div">
           {options.username}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {options.email}
          </Typography>
          <Typography variant="body2">
           {options.address.country}
            <br />
            
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}

export default TestCard
