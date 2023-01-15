import React from 'react'
import back from '../../assets/backarrow.svg'
import './back.css'

function Back(props) {
  return (
    <div className="back">
        <div className="arrow-icon"><a href={props.url}><img className="arrow" src={back} /></a></div>
        <a href={props.url}>Back to products </a>
    </div>
  )
}

export default Back