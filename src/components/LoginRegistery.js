import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Login from "./Login";
import Registery from "./Registery";
import anime from "animejs";

const LoginRegistery = () => {
  const [active, setActive] = useState(false);

  const clickLogInHandler = () => {
    setActive(false);
  };
  const clickRegisteryHandler = () => {
    setActive(true);
  };
  useEffect(() => {
    if (!active) {
      anime({
        targets: ".login",
        translateX:450,
      });
      
    } else {
      anime({
        targets: ".register",
        translateX: 450,
      });
      anime({
        targets: ".login",
        translateX: -10,
      });
        
    }
  }, [active]);
  return (
    <div style={{width:'90%', border:'1px solid red'}}>
      <div style={{textAlign:'center',width:'100%'}}>
        <Button  disabled={!active?true:false} sx={{m:1,fontSize:'15px'}} onClick={clickLogInHandler}>
          Login
        </Button>
        <Button disabled={active?true:false} sx={{m:1,fontSize:'15px'}} onClick={clickRegisteryHandler}>Registery</Button>
      </div>
      {active ? <Registery /> : <Login />}
    </div>
  );
};

export default LoginRegistery;
