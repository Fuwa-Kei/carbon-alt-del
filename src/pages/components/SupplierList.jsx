import React, {useContext, useState} from 'react'
import { ShopContext } from '../../context/shop-context'
import { useParams } from 'react-router-dom'
import productDetails from '../../assets/products/productDetails';
import './supplierList.css'

function SupplierList({name, offset, price}) {

    const { addToCart } = useContext(ShopContext);
    const { productId} = useParams();
    const singleProduct = productDetails.find(product => product.id === parseInt(productId))
    const id = singleProduct.id;

    const [addCart, setAdded] = useState("Add To Cart");

    function handleClick() {
      addToCart(id);
      setAdded("Added")
    }

  return (
    <div className="supplier-list">
        <div className="supplier">
            <div className="supplier-name">{name}</div>
            <div className="offset-price">Carbon Offset Price: ${offset}</div>
            <div className="product-price">Price: ${price}</div>
            <div className="add-cart" onClick={() => handleClick()}>{addCart}</div>
        </div>
    </div>
  )
}

export default SupplierList