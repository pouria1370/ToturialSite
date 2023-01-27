import { Button, FormControl, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import anime from 'animejs'
import { red } from "@mui/material/colors";
const UserpanelChangePassword = () => {
  const [isEntered, setIsEntered] = useState(false);
  const [setBig, setSetBig] = useState(true);
  
  
  
  /**utility functions */

  const travers=useCallback((flag)=>{
    if(flag){
      anime({
        targets: '.userpanelchangepassword_firstsection',
        width: '100%',
        easing: 'easeInOutQuad'
      });
      anime({
        targets: '.userpanelchangepassword_secondsection',
        width: '0%',
        easing: 'easeInOutQuad'
      });
    }
    else{
      anime({
        targets: '.userpanelchangepassword_firstsection',
        width: '60%',
        easing: 'easeInOutQuad'
      });
      anime({
        targets: '.userpanelchangepassword_secondsection',
        width: '40%',
        easing: 'easeInOutQuad'
      });
    }
  },[])

  /**handlers */
  const clickHandler=()=>{
    setSetBig(prev=>!prev)
    if(setBig){
      travers(true)
    }
    else{
      travers(false)
    }
  }
  const submitHandler=(event)=>{
    event.preventDefault()
    event.stopPropagation()
    setIsEntered(prev=>!prev)
    console.log(isEntered)
  }

  /**use Effects */

  useEffect(() => {
    travers(true)

    return () => {
     setSetBig(true)
    };
  }, [travers]);




  return (
    <div
      className="userpanelchangepassword_container"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyItems: "space-between",
        padding: "10px",
      }}
    >
      {!isEntered ? (
        <div
          className="userpanelchangepassword_firstsection"
          style={{
            width: "60%",
            background: `linear-gradient(to left,${red[100]},transparent)`,
            height: "200px",
          }}
          onClick={clickHandler}
        >
         <FormControl onSubmit={submitHandler} component="form" sx={{width:'100%'}}>
         <TextField  label="New Password" sx={{marginTop:"10%",width:'100%',paddingRight:'10px',}} />
         <Button type="submit">Submit</Button>
         </FormControl>
          
        </div>
      ) : (
        <div
          className="userpanelchangepassword_firstsection"
          style={{
            width: "60%",
            background: `linear-gradient(to left,${red[200]},transparent)`,
            height: "200px",
          }}
          onClick={clickHandler}
        >
          <FormControl onSubmit={submitHandler} component="form" sx={{width:'100%'}}>
          <TextField label="Repeat Password" sx={{ marginTop: "5% ",width:'100%',paddingRight:'10px',}} />
          <Button type="submit" sx={{ marginTop: "5% ",width:'50%',paddingRight:'10px',}}>Submit</Button>
          </FormControl>
        </div>
      )}
      <div
        className="userpanelchangepassword_secondsection"
        style={{
          width: "40%",
          background: "linear-gradient(to left,green,transparent)",
          height: "200px",
        }}
      ></div>
    </div>
  );
};

export default UserpanelChangePassword;
