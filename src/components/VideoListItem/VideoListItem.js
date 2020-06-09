import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import './VideoListItem.css'

export default function VideoListItem(props) {

  const handleClick = (video) => {
    props.setSelectedVideoId(video.snippet.resourceId.videoId)
    props.setVideoDetails(video.snippet)
  }

  const handleChange = () => {
    console.log('jio')
  }

  return (
    <Row className="mb-1 py-2 single-video" onClick={() => handleClick(props.video)}>
      <Col className="flex-grow-unset">
        <Form.Check aria-label="option 1" onChange={handleChange} />
      </Col>
      <Col><img src={props.video.snippet.thumbnails.medium.url} /></Col>
      <Col>
        <div className="font-weight-bold">{props.video.snippet.title.slice(0, 40) + '...'}</div>
      </Col>

    </Row>
  )
}
