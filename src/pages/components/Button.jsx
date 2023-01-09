import React from 'react'
import {Link} from 'react-router-dom'
import './button.css'

function Button({url, text}) {
  return (
    <div class="button"><Link to={url}>{text}</Link></div>
  )
}

export default Button