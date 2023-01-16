import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navBar">
        <div className="navBar-main">
            <h1>CarbonAltDel</h1>
            <div className="nav-links">
                <Link to="/account">Account</Link>
                <Link to="/products">Products</Link>
                <Link to="/">Sign Out</Link>
            </div>
        
        
            <div className="navbar-menu">
            {toggleMenu
              ? <RiCloseLine size={27} onClick={()=> setToggleMenu(false)} />
              : <RiMenu3Line size={27} onClick={()=> setToggleMenu(true)} />
            }
            {toggleMenu && (
              <div className="navbar-menu-container">
                <div className="navbar-menu-container-links">
                    <Link to="/">Account</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/">Sign Out</Link>
                </div>
              </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default Navbar