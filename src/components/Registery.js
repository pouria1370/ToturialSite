import {
  Button,
  CircularProgress,
  FormControl,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";

const Registery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const submitHandler = async (event) => {
    event.preventDefault();
    /// 1: fetching data
    try {
      setIsLoading(true);
      const responce = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAJT5xswPxeHZOuFb8COIXlkbqMmuV_5Oc",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            Password: passwordRef.current.value,
            returnSecureToken: true,
            mode: "no-cors",
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!responce.ok) throw new Error("Authentication failed");
      const data = await responce.json();
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      /// 2: handling Error
      console.log(error);
      setIsLoading(false);
    }

    /// 3: showing Data
    console.log("hello");
  };
  return (
    <FormControl component="form" onSubmit={submitHandler}>
      <TextField
        label="email"
        inputRef={emailRef}
        inputProps={{ type: "email" }}
      />
      <TextField
        label="password"
        inputProps={{ type: "password" }}
        inputRef={passwordRef}
      />
      {isLoading ? <CircularProgress /> : <Button type="submit">Submit</Button>}
    </FormControl>
  );
};

export default Registery;
