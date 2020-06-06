import React from 'react'
import './VideoDetails.css'

export default function VideoDetails(props) {

  const { title, description } = props.details

  return (
    <div>
      <h1>{title}</h1>
      <p>{description && description.split('\n').map(i => {
        return <p>{i}</p>
      })}</p>


    </div>
  )
}
