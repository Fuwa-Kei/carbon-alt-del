import React from 'react'
import { BiSearch, BiCartAlt } from "react-icons/bi"
import './search.css';


function Search({pageName}) {
  return (
    <div className="search-bar">
        <p className="product-heading">{pageName} </p>
        <div className="search-box">
            <div className="search">
                <input className="searchText" type="text" placeholder="Search" />
                <div className="searchIcon"><BiSearch /></div>
            </div>
                <div className="cart"><BiCartAlt size={26}/> Cart </div>
        </div> 
    </div>
  )
}

export default Search