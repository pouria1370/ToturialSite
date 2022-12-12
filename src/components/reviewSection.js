import { SaveOutlined } from "@mui/icons-material";
import { CircularProgress, IconButton, Input, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import CheckIcon from '@mui/icons-material/Check'

const ReviewSection = ({ URL,JsxTag }) => {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [commentsSave, setCommentsSave] = useState([])
  let timeOutRef=useRef(null)
  let comments = [];

     /**
   * this is Handlers
   */
  const clickHandler = async () => {
    setLoading(true);
    let responce = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: { "Content-Type": "application/json" },
    });
    let c=setTimeout(() => {
        setLoading(false);setSuccess(true);
    }, 2000);
    // if (responce.ok) {
    //   setLoading(false);setSuccess(true);
    // }
  };

  const changeInpputHandler=(event)=>{setComment(event.target.value)}
    /**Use Effects */
  useEffect( () => {
   
    if (!success) {
     (async function fetchData(){
        let responce = await fetch(URL);
        comments = await responce.json();
        console.log(comments);
        setCommentsSave(comments)
     })()
    }
    else{
        timeOutRef=setTimeout(() => {
            setComment("");
          setSuccess(false)
        }, 3000)
    }
    return () => {
      clearTimeout(timeOutRef)
    };
  }, [success]);


  return (
    <div>
      <form>
        <TextField
          label="your Commnet"
          multiline
          placeholder="plase write your idea"
          value={comment}
          onChange={changeInpputHandler}
        />
        <IconButton onClick={clickHandler}>
          {loading ? <CircularProgress /> : !success?<SaveOutlined />:<CheckIcon/>}
        </IconButton>
      </form>
      <Container>{
        commentsSave.map((singularComment)=>{return(<JsxTag key={singularComment.id} options={{...singularComment}}/>)})
      }</Container>
    </div>
  );
};

export default ReviewSection;
