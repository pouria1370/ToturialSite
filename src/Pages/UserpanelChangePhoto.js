import { Button, IconButton } from "@mui/material";
import React from "react";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
const UserpanelChangePhoto = () => {
  return (
    <div
      className="userpanelchangephoto_container"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyItems: "space-between",
        padding:'10px'
      }}
    >
      <div className="userpanelchangephoto_firstsection"
        style={{ width: "65%", border: "1px solid red" ,display:'flex',flexDirection:"row",justifyItems:'space-between',padding:'10px'}}
      >
        <div style={{width:'40%' }}>
          <div style={{background:"linear-gradient(to left,red,transparent)",height:'200px'}}>IMAGE</div> 
          <div style={{textAlign:"center"}}>
             <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
          </div>
        </div>
        <div style={{width:'60%',marginLeft:'10px'}}>
          <div style={{background:"linear-gradient(to left,green,transparent)",height:'50px'}}>IS it succecceded or not? Error boundaries</div>
          <div style={{background:"linear-gradient(to right,pink,transparent)",height:'200px ',marginTop:'10px'}}> here must all properties of image be listed</div>
        </div>
      </div>
      <div className="userpanelchangephoto_secondtsection"
      style={{ width: "35%", border: "1px solid blue",display:'flex',flexDirection:"row" }}>
        <div style={{ width: "50%" ,marginLeft:'10px' ,marginTop:'10px'}}>
          <div style={{ background:"linear-gradient(to left,gray,transparent)",height:'100px'}}> image good 1</div>
          <div style={{ background:"linear-gradient(to left,gray,transparent)",height:'200px',marginTop:'10px'}}> image good 2</div>   
        </div>
        <div style={{ width: "50%",marginLeft:'10px' ,marginTop:'10px'}}>
        <div style={{ background:"linear-gradient(to left,purple,transparent)",height:'100px'}}> image bad 1</div>
          <div style={{ background:"linear-gradient(to left,purple,transparent)",height:'200px',marginTop:'10px'}}> image bad 2</div>
        </div>

      </div>
    </div>
  );
};

export default UserpanelChangePhoto;
