import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function VideoListItem(props) {
  return (
    <Row className="my-2">
      <Col><img src={props.video.snippet.thumbnails.medium.url} /></Col>
      <Col>
        <div className="font-weight-bold">{props.video.snippet.title.slice(0, 40) + '...'}</div>
      </Col>

    </Row>
  )
}
