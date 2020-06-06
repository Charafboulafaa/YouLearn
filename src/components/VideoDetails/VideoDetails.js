import React from 'react'
import './VideoDetails.css'

export default function VideoDetails(props) {
  return (
    <div>
      <h1>{props.details.title}</h1>
      <p>{props.details.description}</p>
    </div>
  )
}
