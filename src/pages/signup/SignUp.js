import React from 'react'
import {Link} from 'react-router-dom'
import Banner from '../components/Banner'
import Button from '../components/Button'
import './signUp.css'

function SignUp() {
  return (
    <div>
        <Banner />
        <div className="signOption">
            <p>Sign Up</p>
            <Link to="/signin"><p>Sign In</p></Link>
        </div>
        <div className="form">
            <input type="text" placeholder='USERNAME' />
            <input type="text" placeholder='COMPANY NAME' />
            <input type="text" placeholder='EMAIL' />
            <input type="text" placeholder='PASSWORD' />
            <input type="text" placeholder='CONFIRM PASSWORD' />
            <Button url="/account" text="sign up" />
        </div>

    </div>
  )
}

export default SignUp