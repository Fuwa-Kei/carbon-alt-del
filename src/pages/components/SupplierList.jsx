import React from 'react'
import './supplierList.css'

function SupplierList({name, offset, price}) {


  return (
    <div class="supplier-list">
        <div class="supplier">
            <div class="supplier-name">{name}</div>
            <div class="offset-price">Carbon Offset Price: ${offset}</div>
            <div class="product-price">Price: ${price}</div>
            <div class="add-cart">Add to Cart</div>
        </div>
    </div>
  )
}

export default SupplierList