import { Card } from '@mui/material'
import React from 'react'

const PicturesCarousel = (props) => {
    return (
        <Card>
            <img style={{width:'100%',height:'300px'}} src={props.item}/>
        </Card>
    )
}

export default PicturesCarousel
