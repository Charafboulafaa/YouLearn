import React from 'react'

export default function Player(props) {
  return (
    <div>
      <iframe width="100%" height="412" src={`https://www.youtube.com/embed/${props.videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}
