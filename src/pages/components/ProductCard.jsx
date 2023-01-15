import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../context/shop-context'
import './productCard.css'

function ProductCard({id, img, name, carbon, price}) {

    const { addToCart, cartItems } = useContext(ShopContext);

    // variable to log the amount of each item added to cart to show on ad button
    const cartItemAmount = cartItems[id]

  return (
        
    <div className="product-box">
            <div className="product-img"><img src={img} alt={name}/></div>
            <div className="product-info">
                <h4>{name}</h4>
                Carbon Rating From: {carbon} <br />
                Price from: ${price}
            </div>
            <div className="product-links">
                <Link to="#">Compare</Link>
                <div className="add-button" onClick={() => addToCart(id)}> 
                    ADD {cartItemAmount > 0 && <> ({cartItemAmount})</>}
                </div>
            </div>
        </div>
  )
}

export default ProductCard;