import React from 'react'
import SupplierList from '../components/SupplierList'
import suppliers from '../../assets/suppliers'
import { useParams } from 'react-router-dom'
import './singleProductsPage.css'
import productDetails from '../../assets/products/productDetails';

function SingleProductPage() {

    const { productId} = useParams();
    const singleProuct = productDetails.find(product => product.id === parseInt(productId))
    const {name, image, details} = singleProuct;

  return (
    <div>
    <div className="single-product-section">
        <div className="single-product-img"><img src={image} alt={name}/></div>
        <div className="single-product-info">
            <div className="single-product-name">{name}</div>
            <div className="singel-product-text">    
                {details}
            </div>
        </div>
    </div>
    {
        suppliers.map((supplier) => (
            <SupplierList 
            key={supplier.id}
            name={supplier.name}
            offset={supplier.offset}
            price={supplier.price}
            /> 
        )) 
    } <p>hello</p>
    
    </div>
  )
}

export default SingleProductPage