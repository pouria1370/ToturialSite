import React, { useState } from 'react'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { CircularProgress } from '@mui/material';
const ReviewCard = ({productInfo}) => {
    const [state, setState] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const thumbDownHandler=()=>{
       if(!isActive) setIsActive(true)
    setState(false)
    }
    const thumbUpHandler=()=>{
        if(!isActive) setIsActive(true)
        setState(true)
    }
    return !productInfo?<CircularProgress/>:
        <div className='ReviewCard-container'>  
            <div>{productInfo.user.username}</div>
            <div>{productInfo.body}</div>
            <div className='ReviewCard-likes'>
            <ThumbUpAltIcon onClick={thumbUpHandler} sx={{color:!isActive?'grey':state?'blue':'grey'}}></ThumbUpAltIcon>
            <ThumbDownIcon onClick={thumbDownHandler} sx={{color:!isActive?'grey':!state?'blue':'grey'}}></ThumbDownIcon>
            </div>
        </div>
    
}

export default ReviewCard
