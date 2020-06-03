import React, { useEffect } from 'react'
import { Card, Button, CardColumns, Container, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import './MyCourses.css'

export default function MyCourses() {

  return (
    <main className="py-5">
      <Container>
        <CardColumns>
          {JSON.parse(localStorage.getItem('myCourses')).map(course => {
            return (
              <Card key={course.id.playlistId} className="singleCourse">
                <Card.Img variant="top" src={course.snippet.thumbnails.high.url} />
                <Card.Body>
                  <Link to={'learn/' + course.id.playlistId}>
                    <Card.Title>{course.snippet.title}</Card.Title>
                  </Link>
                  <ProgressBar variant="info" now={Math.floor(Math.random() * (100 - 0 + 1)) + 0} />
                </Card.Body>
              </Card>
            )
          })}
        </CardColumns>
      </Container>
    </main>
  )
}
