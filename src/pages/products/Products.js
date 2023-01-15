import React from 'react'
import ProductCard from '../components/ProductCard'
import './product.css'
import productDetails from '../../assets/products/productDetails'
import Search from '../components/Search'
import { BiCartAlt } from "react-icons/bi"
import {Link} from 'react-router-dom'

function Products() {

  return (
    <div className="product-page">
        <Search pageName="Products" />
        <div className="cart-icon"><Link to='/cart'><BiCartAlt size={20} /> Cart </Link></div>
        <div className="section">
        {
        productDetails.map(detail => (
                <ProductCard 
                    key={detail.id}
                    id={detail.id}
                    img={detail.image}
                    name={detail.name}
                    carbon={detail.carbon}
                    price={detail.price}
                />
            ))}
    </div>
    </div>
  )
}

export default Products