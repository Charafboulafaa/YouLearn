import React from 'react'
import heartIcon from './heart.svg'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      Developed by Charaf Boulafaa with <img src={heartIcon} className="heart-icon" alt="heart" /> in GA
    </footer>
  )
}
