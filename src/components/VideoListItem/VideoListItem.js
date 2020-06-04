import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './VideoListItem.css'

export default function VideoListItem(props) {

  const handleClick = (id) => {
    console.log(id)
    props.setSelectedVideoId(id)
  }

  return (
    <Row className="mb-1 py-2 single-video" onClick={() => props.setSelectedVideoId(props.video.snippet.resourceId.videoId)}>
      <Col><img src={props.video.snippet.thumbnails.medium.url} /></Col>
      <Col>
        <div className="font-weight-bold">{props.video.snippet.title.slice(0, 40) + '...'}</div>
      </Col>

    </Row>
  )
}
