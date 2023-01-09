import React from 'react'
import Banner from '../components/Banner'
import compare from '../../assets/compare.svg'
import join from '../../assets/join.svg'
import offset from '../../assets/offset.svg'
import './home.css'
import Button from '../components/Button'

function Home() {
  return (
    <div className="Home">
        <Banner />
        <div class="how-it-works">
        <h1>How It Works</h1>
    </div>
    <div class="main-points">
        <div class="statement">
            <div class="icon"><img src={join} alt="join" /></div>
            <div class="text">
                <h4>Join us for free</h4>
                Join today for 14-day free trial to start doing your part for the planet
            </div>
        </div>
        <div class="statement">
            <div class="icon"><img src={compare} alt="compare" /></div>
            <div class="text">
                <h4>Compare</h4>
                Purchase from the largest suppliers and compare ingredients on both price and carbon footprint
            </div>
        </div>
        <div class="statement">
            <div class="icon"><img src={offset} alt="offset" /></div>
            <div class="text">
                <h4>Offset</h4>
                Purchase carbon credits to help offset the carbon footprint of your ingredients’ supply chain, helping your business reach net zero
            </div>
        </div>
    </div>

    <div class="about">
        <div class="about-text">
        <h3>Welcome to carbon Alt Delete</h3>
        <ol>
            <li>After joining us you will be able to purchase  all your ingredients from sustainable suppliers and and can make intelligent choices based on each suppliers carbon rating</li>
            <li>We calculate teh carbon footprint of every ingredient from all out auupliers and present it to you a an easy to understad way so you can easily order what you need adn from which supplier easily </li>
            <li>We also offer to help help companies like you to offet your carbon footprint </li>
        </ol>
        </div>
        <Button url="/signup" text="register"/>
    </div>
    </div>
  )
}

export default Home