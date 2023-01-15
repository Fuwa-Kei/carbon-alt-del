import React, { useContext } from 'react'
import productDetails from '../../assets/products/productDetails';
import { ShopContext } from '../../context/shop-context';
import CartItem from '../components/CartItem';
import Search from '../components/Search';
import Button from '../components/Button'
import './cart.css'

function Cart() {

  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div>
      <Search pageName='Cart' />
    <div className="cart">
      <h3>Cart Items</h3>
    </div>
    <div className="cartItems">
        {productDetails.map((detail) => {
            if(cartItems[detail.id] !== 0) {
              return <CartItem  
              data={detail} />
            }
        })}
    </div>
    <div className="cartTotal">
      <p>Total: ${totalAmount}</p>
      <Button url="/checkout" text="Place Order" />
    </div>

    </div>
  )
}

export default Cart;