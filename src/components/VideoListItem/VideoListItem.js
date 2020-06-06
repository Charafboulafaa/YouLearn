import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './VideoListItem.css'

export default function VideoListItem(props) {

  const handleClick = (video) => {
    props.setSelectedVideoId(video.snippet.resourceId.videoId)
    props.setVideoDetails(video.snippet)
  }

  return (
    <Row className="mb-1 py-2 single-video" onClick={() => handleClick(props.video)}>
      <Col><img src={props.video.snippet.thumbnails.medium.url} /></Col>
      <Col>
        <div className="font-weight-bold">{props.video.snippet.title.slice(0, 40) + '...'}</div>
      </Col>

    </Row>
  )
}
