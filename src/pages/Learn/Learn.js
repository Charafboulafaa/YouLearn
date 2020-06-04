import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'

import './Learn.css'


export default function Learn() {

  const [course, setCourse] = useState({})

  let { courseId } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${courseId}&key=${process.env.REACT_APP_API_KEY}`)

      setCourse(res.data)
    }

    apiCall()
  }, [])

  return (
    <main id="learn" className="py-5">
      <Container>

        <Row>
          <Col xs={8}>
            Player
          </Col>

          <Col xs={4}>
            <Container>
              {course.items && course.items.map((el) => {
                return (<Row className="my-2">
                  <Col><img src={el.snippet.thumbnails.medium.url} /></Col>
                  <Col>
                    <div className="font-weight-bold">{el.snippet.title.slice(0, 40) + '...'}</div>
                  </Col>

                </Row>)
              })}
            </Container>
          </Col>
        </Row>

      </Container>
    </main>
  )
}
