import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box } from "@mui/material";

export default function ReviewOfCustomers({item}) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
    {item.map((subItem) => (
         <Card sx={{width:'33%',fontFamily:'vazir' }}>
         <CardHeader
           avatar={
             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
               <img src={`${subItem.thumbnail}`}/>
             </Avatar>
           }
           title="مهراد جم"
           subheader="September 14, 2016"
         />
         <CardContent>
           <Typography variant="body2" color="text.secondary">
             This impressive paella is a perfect party dish and a fun meal to cook
             together with your guests. Add 1 cup of frozen peas along with the
             mussels, if you like.
           </Typography>
         </CardContent>
       </Card>
    ))}
     </Box>
  )
}
