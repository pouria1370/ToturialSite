import {
  Autocomplete,
  Button,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";

const Registery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState("Transgender")
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  /**Handlers */

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

  const genderHandler = (event) => {
    setGender(event.target.value);
  };

  return (
    <FormControl component="form" onSubmit={submitHandler} className="register">
      <TextField
        label="Registery-email"
        inputRef={emailRef}
        inputProps={{ type: "email" }}
        sx={{m:1}}
      />
      <TextField
        label="Registery-password"
        inputProps={{ type: "password" }}
        inputRef={passwordRef}
        sx={{m:1}}

      />

      <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={gender}
            label="Gender"
            color="primary"
            onChange={genderHandler}
        sx={{m:1}}

          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Transgender">Transgender</MenuItem>
           
          </Select>
       
      {isLoading ? <CircularProgress /> : <Button  sx={{m:1,fontSize:'20px'}}   type="submit">Submit</Button>}
    </FormControl>
  );
};

export default Registery;
