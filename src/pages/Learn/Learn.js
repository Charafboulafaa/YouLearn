import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import VideoListItem from '../../components/VideoListItem/VideoListItem'
import Player from '../../components/Player/Player'


import './Learn.css'


export default function Learn() {

  const [course, setCourse] = useState({})
  const [selectedVideoId, setSelectedVideoId] = useState('')

  let { courseId } = useParams()

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${courseId}&key=${process.env.REACT_APP_API_KEY}`)

      setCourse(res.data)
      setSelectedVideoId(res.data.items[0].snippet.resourceId.videoId)
    }

    apiCall()
  }, [])

  return (
    <main id="learn" className="py-5">
      <Container>

        <Row>
          <Col xs={8}>
            <Player videoId={selectedVideoId}></Player>
          </Col>

          <Col xs={4} id="videoList">
            {course.items && course.items.map((el) => <VideoListItem key={el.id} video={el} setSelectedVideoId={setSelectedVideoId}></VideoListItem>)}
          </Col>
        </Row>

      </Container>
    </main>
  )
}
