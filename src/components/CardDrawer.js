import { Drawer, Stack } from "@mui/material";

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
        contextData.card.map((singleCard) => (
          <WishListCard key={singleCard.id} options={singleCard} />
        ))
      ) : (
        <div>{contextData.card.length}هیچ چیزی وارد نکردید</div>
      )}

    </Drawer>
  );
};

export default CardDrawer;
