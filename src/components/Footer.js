import { Box, createTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const theme = createTheme({
  palette: {
    primary: { main: "#557153" },
    secondary: { main: "#A9AF7E" },
  },
});
const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row",width:"100%"}}>
      <Box
        sx={{
          width: "30%",
          backgroundColor: `${theme.palette.primary.main}`,
          border: `1px solid ${theme.palette.secondary.main}`,
        
          
          
        }}
      >
        <Grid container lg={3} md={6} sm={12}>
          <Grid item>
            <FacebookIcon></FacebookIcon>
          </Grid>
          <Grid item>
            <TwitterIcon></TwitterIcon>
          </Grid>
          <Grid item>
            <PinterestIcon></PinterestIcon>
          </Grid>
          <Grid item>
            <LinkedInIcon></LinkedInIcon>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{ width: "70%", backgroundColor: `${theme.palette.primary.main}`,height:'500px' }}
      ></Box>
    </Box>
  );
};

export default Footer;
