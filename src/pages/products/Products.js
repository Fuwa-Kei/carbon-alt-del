import React from 'react'
import ProductCard from '../components/ProductCard'
import './product.css'
import productDetails from '../../assets/products/productDetails'
import Search from '../components/Search'

function Products() {

  return (
    <div>
        <Search pageName="Products" />
    <div className="section">
        
        {
        productDetails.map(detail => (
                <ProductCard 
                    key={detail.id}
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