import React, { useEffect } from 'react'
import { Card, Button, CardColumns, Container, ProgressBar } from 'react-bootstrap';

export default function MyCourses() {

  return (
    <main className="py-5">
      <Container>
        <CardColumns>
          {JSON.parse(localStorage.getItem('myCourses')).map(course => {
            return (
              <Card key={course.id.playlistId} >
                <Card.Img variant="top" src={course.snippet.thumbnails.high.url} />
                <Card.Body>
                  <Card.Title>{course.snippet.title}</Card.Title>
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
