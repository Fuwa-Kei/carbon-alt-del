import React from 'react'
import video from '../../assets/openingvid.mp4'
import './banner.css'
import Button from './Button'

function Banner() {
  return (
    <div className="home-video">
        <div className="video"><video autoplay loop muted>
         <source src={video} type="video/mp4" />
        </video>
        </div>
        <div className="slogan">
          <div className="slogan-txt">
            Shop to save the planet<br />
            Do your part and start reducing your carbon footprint today
          </div>
          <div className="banner-button">
            <Button url="/signup" text="Join us today" />
        </div>
        </div>
    </div>
  )
}

export default Banner;