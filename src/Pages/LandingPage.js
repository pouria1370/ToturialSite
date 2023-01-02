import {  createTheme, Grid, ThemeProvider } from "@mui/material";

import { blue, red, yellow } from "@mui/material/colors";
import { Container } from "@mui/system";
import React from "react";
import "./landingPage.css";
const LandingPage = () => {
  const myTheme=createTheme({
    components:{
      MuiGrid:{
        styleOverrides:{
          container:({ ownerState ,theme}) => ({
            ...(ownerState.columns=='20' && {border:"1px solid blue"
              }),
              [theme.breakpoints.down('sm')]:{border:"10px solid pink"}
          }),
        }
      }
    }
  })
  return (
    <Container maxWidth="80%">
    <ThemeProvider theme={myTheme}>
    <Grid container columns={20} spacing={{sm:1,md:2,xl:3}} direction='row' justifyContent='center'>
    <Grid item sx={{backgroundColor:blue[400],height:'30px'}}>I am First item
   </Grid>
    <Grid item sx={{backgroundColor:yellow[400],height:'30px'}}>I am Second item
   </Grid>
    <Grid item sx={{backgroundColor:red[400],height:'30px'}}>I am Third item
  </Grid>
   </Grid>
      </ThemeProvider>
    </Container>
  );
};

export default LandingPage;
