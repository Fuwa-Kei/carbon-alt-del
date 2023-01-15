import React, { useContext } from 'react'
import productDetails from '../../assets/products/productDetails';
import { ShopContext } from '../../context/shop-context';
import CartItem from '../components/CartItem';
import Search from '../components/Search';
import Button from '../components/Button'
import './cart.css'
import Back from '../components/Back';

function Cart() {

  const { cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = (Math.round(getTotalCartAmount() * 100) / 100).toFixed(2);

  return (
    <div>
      <Search pageName='Cart' />
      <Back url='../products' />
    <div className="cart">
    <div className="cartItems">
        {productDetails.map((detail) => {
            if(cartItems[detail.id] !== 0) {
              return <CartItem  
              data={detail} />
            }
        })}
    </div>
    {totalAmount > 0 ?
    <div className="cartTotal">
      <p>Total: ${totalAmount}</p>
      <Button url="/checkout" text="Place Order" />
    </div> 
    : <p>Your cart is empty</p>}
    </div>
    </div>
  )
}

export default Cart;