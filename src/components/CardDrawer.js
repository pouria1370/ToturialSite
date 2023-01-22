import { Button, Drawer, Stack, Typography } from "@mui/material";

import React, { useEffect } from "react";
import { useContext } from "react";
import { cardContext } from "../DataManagmnet/context-provider";
import WishListCard from "./Cards/wishListCard";

const CardDrawer = () => {
  const contextData = useContext(cardContext);
  useEffect(() => {
    console.log("i am Drawer again because of useHook rerendered");
  }, []);
  return (
    <Drawer
      open={contextData.showDrawer}
      onClose={contextData.showDrawerHandler}
    >
   
      {contextData.card.length !== 0 ? (
        <>
       { contextData.card.map((singleCard) => (
         <Stack direction="column">
            <WishListCard key={singleCard.id} options={singleCard} />
           </Stack>
        ))}
        <Button>Checkout</Button>
        </>

      ) : (
        <Typography sx={{color:"secondary.main", fontFamily:'iransanse',fontSize:"15px",p:'5px'}}>هیچ چیزی وارد نکردید</Typography>
      )}

    </Drawer>
  );
};

export default CardDrawer;
