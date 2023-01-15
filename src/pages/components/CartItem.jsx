import React, {useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
import './cartItem.css'

function CartItem(props) {

    const { id, image, name, price } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
        <div><img className="cart-img" src={image} alt="productImage" /></div>
            <div className="cart-info">
                <div className="cart-item-name">{name}</div> 
                <div className="cart-item-info">
                    <div className="cart-item-details">Carbon offset price: £0.50</div>
                    <div className="cart-item-details price">${price}</div>
                </div>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input type="text"
                      value={cartItems[id]}
                      onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
    </div>
  )
}

export default CartItem;