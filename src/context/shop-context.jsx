import React, {createContext, useState} from 'react'
import productDetails from '../assets/products/productDetails';

export const ShopContext = createContext(null);

// initialising cart with 0 of each item 
const getDefaultCart = () => {
  let cart = {}
    for (let i = 1; i < productDetails.length + 1; i++) {
        cart[i] = 0 
    }
    return cart;
}

export const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = productDetails.find((detail) => detail.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  
  // add items to cart -> increase item (based in its id) by 1
  const addToCart = (itemId) => {
      setCartItems (prev => ({
          ...prev, [itemId]: prev[itemId] + 1
      }));
  }

    // remove item from cart 
  const removeFromCart = (itemId) => {
    setCartItems (prev => ({
        ...prev, [itemId]: prev[itemId] - 1
    }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems(prev => ({...prev, [itemId]: newAmount}));
  };

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
