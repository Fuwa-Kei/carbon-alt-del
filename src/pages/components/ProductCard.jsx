import React from 'react'
import {Link} from 'react-router-dom'
import './productCard.css'

function ProductCard({img, name, carbon, price}) {
  return (
    <div class="product-box">
            <div class="product-img"><img src={img} alt={name}/></div>
            <div class="product-info">
                <h4>{name}</h4>
                Carbon Rating From: {carbon} <br />
                Price from: ${price}
            </div>
            <div class="product-links">
                <Link to="#">Compare</Link>
                <div class="add-button"><Link to="#">ADD</Link></div>
            </div>
        </div>
  )
}

export default ProductCard;