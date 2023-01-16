import React from 'react'
import SupplierList from '../components/SupplierList'
import suppliers from '../../assets/suppliers'
import { useParams } from 'react-router-dom'
import { BiCartAlt } from "react-icons/bi"
import {Link} from 'react-router-dom'
import './singleProductsPage.css'
import productDetails from '../../assets/products/productDetails';
import Search from '../components/Search'
import Back from '../components/Back'

function SingleProductPage() {

    const { productId} = useParams();
    const singleProuct = productDetails.find(product => product.id === parseInt(productId))
    const {name, image, details} = singleProuct;

  return (
    <div>
    <Search pageName={name} />
    <Back url='../products'/>
    <div className="cart-icon"><Link to='/cart'><BiCartAlt size={20} /> Cart </Link></div>
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
    }
    
    </div>
  )
}

export default SingleProductPage