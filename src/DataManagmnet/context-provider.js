import React, { createContext, useState } from "react";
export const cardContext = createContext({ removeCard: () => {},card:[] });
const useCard = () => {
  const [card, setCard] = useState([]);
  
  const [showDrawer, setShowDrawer] = useState(false);


  const addCard = (product) => {
    let adjactedArray = [...card];
    if (adjactedArray.findIndex(current=>product.title===current.title)!==-1) {
      let index = adjactedArray.findIndex(
        (current) => current.title === product.title
      );
      
      adjactedArray.splice(index, 1, {
        ...adjactedArray[index],
        count: `${+adjactedArray[index].count+1}`,
      });
      
    } else {
      adjactedArray.push({ ...product, count: 1 });
    }
    setCard([...adjactedArray]);
  };


  const removeCard = (product) => {
    let adjactedArray = [...card];
    card.forEach((singleObject, index) =>
      singleObject.title === product.title
        ? adjactedArray.splice(index, 1)
        : null
    );
    setCard([...adjactedArray]);
    
  };


  const riseCard = (product) => {
    addCard(product);
  };


  const addOrRemove = (product) => {
    
    if (card.find(current=>current.title===product.title)) {
      removeCard(product);
    } else {
      addCard(product);
    }
    //console.log(product,adjactedArray)
  };


  const reduceCard = (product) => {
    let adjactedArray = [...card];
    let index = card.findIndex((current) => current.title === product.title);
    if (+adjactedArray[index].count!==1)
     { 
       adjactedArray.splice(index, 1, {
        ...adjactedArray[index],
        count: `${+adjactedArray[index].count-1}`,
      })
      setCard([...adjactedArray])}
    else removeCard(product);
  };


  const giveNumberOfProduct = (product) => {
    let index = card.findIndex((Current) => Current.title === product.title);
    // card.forEach(element => {
    //     if(element.title===product.title)count++
    // });
    return card[index].count;
  };
  const showDrawerHandler = () => {
    setShowDrawer((prevState) => !prevState);
  };
  const value = {
    card,
    removeCard,
    riseCard,
    reduceCard,
    addCard,
    giveNumberOfProduct,
    showDrawer,
    showDrawerHandler,
    addOrRemove,
  };
  return value;
};
export const ContextProvider = ({ children }) => {
  const value = useCard();
  return <cardContext.Provider value={value}>{children}</cardContext.Provider>;
};
