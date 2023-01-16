import React from 'react'
import graph from '../../assets/Chart.svg'
import Button from '../components/Button'
import './account.css'

function Account() {
  return (
    <div className="account-container">
    <div class="account-header">
        <h3>Hello, USERNAME</h3>
        <p>Your carbon score: <span>123</span></p>
    </div>

    
    <div class="account-info">
        <div class="profile">
            <div class="profile-info">
                <h4>Company Name</h4>
                <p>Company Name</p>
            </div>
            <div class="profile-info">
                <h4>Email</h4>
                <p>contact@company.co.uk</p>
            </div>
            <div class="profile-info">
                <h4>Affiliate</h4>
                <p>affiliate link goes here</p>
            </div>
        </div>

        <div class="profile">
        <h3>Order History</h3>
            <div class="order-info">
                <h4>Order #102</h4>
                <p>12/11/2022</p>
            </div>
            <div class="order-info">
                <h4>Order #101</h4>
                <p>12/10/2022</p>
            </div>
            <div class="order-info">
                <h4>Order #100</h4>
                <p>12/09/2022</p>
            </div>
        </div>
    </div>

    

        <div class="carbon-history-info">
            <div class="carbon-history-header">Your Carbon History</div>
            <div class="carbon-history-chart"><img src={graph} alt="graph" /></div>    
            <div class="certificate">
                <p>You have offset a total of : 1 tonne of carbon </p>
            </div>
        </div>

    
    <div class="profile-offset">
        <div class="profile-offset-info">
            <div class="profile-offset-header">Offset Additional carbon</div>
            <div class="profile-offset-amount">
                <label for="donate">Enter offset amount:</label><br />
                <input type="text" id="donate" name="donate" /> 
                <Button text="Pay now" />
            </div>
            <div class="offset-info">
                <p>Every £10  can offset an average of 1 tonne  of CO2</p>
                <p>Your funding supports our Global Portfolio VCS certified carbon reduction programmes across the world</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Account