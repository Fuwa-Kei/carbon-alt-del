import React from 'react'
import Banner from '../components/Banner'
import Button from '../components/Button';
import './signIn.css'

function SignIn() {
  return (
    <div>
        <Banner />
        <div className="signOption">
            <p className="signOption-signup">Sign Up</p>
            <a href="/signin"><p className="signOption-signin">Sign In</p></a>
        </div>
        <div className="form">
            <input type="text" placeholder='USERNAME' />
            <input type="text" placeholder='PASSWORD' />
    
            <Button url="/account" text="Signin" />
        </div>
    </div>
  )
}

export default SignIn;